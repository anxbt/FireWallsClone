import React from 'react'
import { View, Text } from 'react-native'


export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    )
}


// HomeScreen.js

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
