"use server"

const token = process.env.ACCESS_TOKEN
const apiURL = "https://api.pandascore.co/lol"

type listChampionsRoute = {
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

// picking 'id','name' and 'image_url' from list all champions 
export type BasicChampionInfo = Pick<listChampionsRoute, 'id'|'name'|'image_url'>



const fetchChampionsData = async (
    query: string | string[]
) => {
    const searchURL = `${apiURL}/champions?search[name]=${query}`
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

        const value: [listChampionsRoute] = await response.json()
        const data = simplifyJson(value)
        return data
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

const simplifyJson = (data: [listChampionsRoute]): BasicChampionInfo[] => {
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