"use server"

const token = process.env.ACCESS_TOKEN
const apiURL = "https://api.pandascore.co/lol"

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

export const getListChampions = async (): Promise<object> => {
    const url = `${apiURL}/champions?page[size]=20`
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

        const data = response.json()
        return data
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
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