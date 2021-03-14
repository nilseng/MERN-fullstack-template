import { IdToken } from "@auth0/auth0-react"

export const getData = async (): Promise<any> => {
    const res = await fetch("/api/<endpoint>")
    return res.json().catch(e => {
        console.log(`Could not fetch data: ${e}`)
        return []
    })
}

export const searchData = async (searchTerm: string): Promise<any[]> => {
    if (!searchTerm) return []
    const res = await fetch(`/api/<endpoint>/${searchTerm}`)
    return res.json().catch(e => {
        console.log(`Search data failed: ${e}`)
        return []
    })
}

export const saveData = async (token: IdToken, data: any): Promise<any> => {
    const res = await fetch("/api/<endpoint>", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.__raw}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json().catch(e => {
        console.log(`Could not save peak: ${e}`)
        return null;
    })
}