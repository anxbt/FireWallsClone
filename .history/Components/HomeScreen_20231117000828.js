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


// HomePage.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchSeriesData } from '../Services/Api'; // Adjust the path based on your actual file structure

const HomeScreen = () => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSeriesData();
        setSeriesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <View>
      <Text>Data from API:</Text>
      {seriesData.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default HomeScreen;


