"use server"

const token = process.env.ACCESS_TOKEN
const apiURL = "https://api.pandascore.co/lol"

export type ChampionAtributes = {
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

// picking 'id','name' and 'image_url' from list all champions 
export type BasicChampionInfo = Pick<ChampionAtributes, 'id'|'name'|'image_url'>

export type BasicPlayerInfo = Pick<PlayerInfo, 'id'|'image_url'|'first_name'|'name'|'last_name'|'role'>


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
        
        const fullData: [PlayerInfo] = await response.json()
        const data = simplifyProJson(fullData)
        return data
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

        const fullData: [ChampionAtributes] = await response.json()
        const data = simplifyChampionJson(fullData)
        return data
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
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

const simplifyChampionJson = (data: [ChampionAtributes]): BasicChampionInfo[] => {
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