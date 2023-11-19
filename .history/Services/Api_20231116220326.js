import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://nsfw-image-generator-api.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '5483905a35msh3fb8c1f7573f84ap1924fbjsnbf3cc92329ab',
    'X-RapidAPI-Host': 'nsfw-image-generator-api.p.rapidapi.com'
  },
  data: {
    type: 'pussy',
    'available _types': 'pussy,  boobs,  gonewild, ass,  thigh,  4k',
    note: 'leave the type field blank to generate random nsfw images'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}