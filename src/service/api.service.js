import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const REACT_APP_KEY = process.env.REACT_APP_PUBLI_KEY

const options = {
    url: BASE_URI,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': REACT_APP_KEY.toString(),
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

// async await
// promise

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}