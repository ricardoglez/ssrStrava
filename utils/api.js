const baseURL = 'https://www.strava.com/'
import utilities from './utilities';

const api = {
    getAuthorization : ( code  ) => {
        const data = {
            client_id:40487,
            client_secret:'c9f7f1d1b48da748b0a8f9e79d66476bae2ebf4a' ,
            code: code ,
            grant_type: 'authorization_code'
        }
        return fetch(`${baseURL}oauth/token`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
              }),
        }).then( response => {
            return response.json()
        })
    },
    getAthleteData: (  ) => {
        return fetch('https://www.strava.com/api/v3/athlete', {
            method: 'GET',
            headers: new Headers({
                'Authorization':`Bearer ${utilities.getLocalToken()}`,
                'Content-Type': 'application/json',
              }),
        }).then( response => {
            return response.json()
        })
    }  
}

export default api;