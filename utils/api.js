const baseURL = 'https://www.strava.com/api/v3/'
import utilities from './utilities';

const api = {
    getAthleteStats : ( id ) => {
        return fetch(`${baseURL}/athletes/${id}/stats`, {
            method: 'GET',
            headers: new Headers({
                'Authorization':`Bearer ${utilities.getLocalToken()}`,
                'Content-Type': 'application/json',
              }),
        }).then( response => {
            return response.json()
        })
    },
    getAuthorization : ( code  ) => {
        const data = {
            client_id:40487,
            client_secret:'c9f7f1d1b48da748b0a8f9e79d66476bae2ebf4a' ,
            code: code ,
            grant_type: 'authorization_code'
        }
        return fetch(`https://www.strava.com/oauth/token`, {
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
        return fetch(`${baseURL}athlete`, {
            method: 'GET',
            headers: new Headers({
                'Authorization':`Bearer ${utilities.getLocalToken()}`,
                'Content-Type': 'application/json',
              }),
        }).then( response => {
            return response.json()
        })
    },
    getAthleteRoutes:( id ) => {
        return fetch(`${baseURL}athletes/${id}/routes`, {
            method: 'GET',
            headers: new Headers({
                'Authorization':`Bearer ${utilities.getLocalToken()}`,
                'Content-Type': 'application/json',
              }),
        }).then( response => {
            return response.json()
        })
    },
    getAthleteActivities:( ) => {
        const opts = {
            page: 1,
            perPage: 50,
        }
        return fetch(`${baseURL}athlete/activities?${new URLSearchParams(opts)}`, {
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