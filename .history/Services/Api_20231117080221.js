// import axios from 'axios';

// const options = {
//   method: 'POST',
//   url: 'https://nsfw-image-generator-api.p.rapidapi.com/',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '5483905a35msh3fb8c1f7573f84ap1924fbjsnbf3cc92329ab',
//     'X-RapidAPI-Host': 'nsfw-image-generator-api.p.rapidapi.com'
//   },
//   data: {
//     type: 'pussy',
//     'available _types': 'pussy,  boobs,  gonewild, ass,  thigh,  4k',
//     note: ""
// }

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// api.js

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://nsfw-image-generator-api.p.rapidapi.com/',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '5483905a35msh3fb8c1f7573f84ap1924fbjsnbf3cc92329ab',
//     'X-RapidAPI-Host': 'nsfw-image-generator-api.p.rapidapi.com',
//   },
// });

// export const fetchNsfwImages = async (type) => {
//   try {
//     const response = await api.post('/', {
//       type,
//       'available_types': 'pussy,boobs,gonewild,ass,thigh,4k',
//       note: 'leave the type field blank to generate random nsfw images',
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error fetching NSFW images:', error);
//     throw error;
//   }
// };



/// apiConfig.js
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5483905a35msh3fb8c1f7573f84ap1924fbjsnbf3cc92329ab',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};

// Api.js
import axios from 'axios';
import { options } from './apiConfig';

const BASE_URL = 'https://moviesdatabase.p.rapidapi.com/titles';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
