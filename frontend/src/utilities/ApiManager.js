export default class ApiManager {
    static async call(endpoint, body) {
        return await fetch(`${process.env.REACT_APP_BACKEND_URL}/${endpoint}`,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
    }
}
