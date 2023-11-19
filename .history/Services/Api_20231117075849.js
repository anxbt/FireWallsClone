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


// HomePage.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { fetchData } from '../Services/Api';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        const result = await fetchData('x/upcoming');
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSeriesData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set the number of columns for your grid
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  item: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default HomeScreen;
