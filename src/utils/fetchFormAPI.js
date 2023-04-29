import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
console.log("this is env api key", process.env.REACT_APP_RAPID_API_KEY)
const API_KEY = "e893e8c32cmsh248eaff5e87972fp132e8ejsnd755f8bb5e25"


const options = {
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFormAPI = async (url) => {
    console.log(`${BASE_URL}/${url}`)
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
} ;