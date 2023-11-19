// import React from 'react'
// import { View, Text } from 'react-native'


// export default function HomeScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home</Text>
//         </View>
//     )
// }



// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { fetchNsfwImages } from '../Services/Api';

// export default function HomeScreen() {
//   const [nsfwData, setNsfwData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchNsfwImages('pussy');
//         setNsfwData(data);
//       } catch (error) {
//         // Handle error
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home</Text>
//       {nsfwData.map((item) => (
//         <Text key={item.id}>{item.url}</Text>
//       ))}
//     </View>
//   );
// }



// api.js
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
  headers: {
    'X-RapidAPI-Key': '5483905a35msh3fb8c1f7573f84ap1924fbjsnbf3cc92329ab',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

const fetchSeriesData = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchSeriesData };


