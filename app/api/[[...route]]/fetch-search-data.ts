"use server"

const token = process.env.ACCESS_TOKEN
const apiURL = "https://api.pandascore.co/lol"

export type ChampionsInfo = {
    armor: number
    armorperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackrange: number
    attackspeedoffset: null | number
    attackspeedperlevel: number
    big_image_url: string
    crit: number
    critperlevel: number
    hp: number
    hpperlevel: number
    hpregen: number
    hpregenperlevel: number
    id: number
    image_url: string
    movespeed: number
    mp: number
    mpperlevel: number
    mpregen: number
    mpregenperlevel: number
    name: string
    spellblock: number
    spellblockperlevel: number
    videogame_versions: [number]
}

export type PlayerInfo = {
    active: boolean,
    current_team: {
        acronym: string,
        id: number,
        image_url: string,
        location: string,
        modified_at: Date,
        name: string,
        slug: string
    },
    current_videogame: {
        id: number,
        name: string,
        slug: string
    },
    first_name: string,
    id: number,
    image_url: string | undefined,
    last_name: string,
    modified_at: Date,
    name: string,
    nationality: string,
    role: string,
    slug: string
}

export type LeagueInfo = {
    id: number,
    image_url: string,
    modified_at: Date,
    name: string,
    series: [
        SerieInfo
    ],
    slug: string,
    url: string,
    videogame: {
        current_version: number,
        id: number,
        name: string,
        slug: string
		}
}

export type SerieInfo = {
    begin_at: Date,
    end_at: Date,
    full_name: string,
    id: number,
    league_id: number,
    modified_at: Date,
    name: string,
    season: string,
    slug: string,
    winner_id: number,
    winner_type: string,
    year: number,
    torunaments?: []
}

export type BasicChampionInfo = Pick<ChampionsInfo, 'id'|'name'|'image_url'>

export type BasicPlayerInfo = Pick<PlayerInfo, 'id'|'image_url'|'first_name'|'name'|'last_name'|'role'>

export type BasicLeagueInfo = Pick<LeagueInfo, 'id'| 'image_url'|'name'>

export const fetchChampionsData = async (
    query: string | string[]
) => {
    const searchURL = `${apiURL}/champions/${query}`
    try {
        const response = await fetch(searchURL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        return data
    } catch (error) {
        return console.log(error)
    }
}

const fetchPlayersData = async (
    query: string | string[]
) => {
    const searchURL = `${apiURL}/players?search[name]=${query}`
    try {
        const response = await fetch(searchURL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        return data
    } catch (error) {
        return console.log(error)
    }
}

const fetchLeaguesData = async (
    query: string | string[]
) => {
    const searchURL = `${apiURL}/leagues?search[name]=${query}`
    try {
        const response = await fetch(searchURL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        return data
    } catch (error) {
        return console.log(error)
    }
}

// Getting only the main leagues
export const getListLeagues = async () => {
    const url = `${apiURL}/leagues?filter[id]=302,293,294,4197,4198,4199,4141,4288,2092`
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} error on ${response.statusText}`)
        }

        const data: [LeagueInfo] = await response.json()
        const parsedData = simplifyLeagueJson(data)
        return parsedData
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

// Getting list of only league tier S players
export const getListPlayers = async (): Promise<BasicPlayerInfo[]> => {
    // getting only tier S team players
    const url = `${apiURL}/players?filter[team_id]=126061,2882,2883,1566,129972,88`

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} error on ${response.statusText}`)
        }
        
        const data: [PlayerInfo] = await response.json()
        const parsedData = simplifyProJson(data)
        return parsedData
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

// Getting list of all champions for the champions table
export const getListChampions = async (page:number): Promise<BasicChampionInfo[]> => {
    const url = `${apiURL}/champions?page=${page}`
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
    
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} error on ${response.statusText}`)
        }

        const data: [ChampionsInfo] = await response.json()
        const parsedData = simplifyChampionJson(data)
        return parsedData
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

const simplifyLeagueJson = (data: LeagueInfo[]): BasicLeagueInfo[] => {
    const jsonSimplify: BasicLeagueInfo[] = []
    for (let i = 0; i < data.length ; i++) {
        const id = data[i].id
        const name = data[i].name
        const image_url = data[i].image_url
        jsonSimplify.push({
            id,
            name,
            image_url,
        })
    }
    return jsonSimplify
}

const simplifyProJson = (data: PlayerInfo[]): BasicPlayerInfo[] => {
    const jsonSimplify: BasicPlayerInfo[] = []
    for (let i = 0; i < data.length ; i++) {
        const id = data[i].id
        const name = data[i].name
        const image_url = data[i].image_url
        const first_name = data[i].first_name
        const last_name = data[i].last_name
        const role = data[i].role
        jsonSimplify.push({
            id,
            name,
            image_url,
            first_name,
            last_name,
            role
        })
    }
    return jsonSimplify
}

const simplifyChampionJson = (data: [ChampionsInfo]): BasicChampionInfo[] => {
    const jsonSimplify: BasicChampionInfo[] = []
    for (let i = 0; i < data.length ; i++) {
        const id = data[i].id
        const name = data[i].name
        const image_url = data[i].image_url
        jsonSimplify.push({
            'id': id,
            'name': name,
            'image_url': image_url,
        })
    }
    return jsonSimplify
}

export const fetchSearchData = async (
    query: string | string[]
) => {
    try {
        const championsData = await fetchChampionsData(query)
        const playersData = await fetchPlayersData(query)
        const leaguesData = await fetchLeaguesData(query)

        const data = [championsData, playersData, leaguesData] 
        return data
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}
// trying to optmize this function