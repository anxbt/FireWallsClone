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


// import React from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';

// export default class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       upcomingMovies: [],
//     };
//   }

//   componentDidMount() {
//     const options = {
//       method: 'GET',
//       url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
//       headers: {
//         'X-RapidAPI-Key': '5483905a35msh3fb8c1f7573f84ap1924fbjsnbf3cc92329ab',
//         'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//       },
//     };

//     try {
//       axios.request(options).then(response => {
//         const upcomingMovies = response.data.results;
//         this.setState({ upcomingMovies });
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     const { upcomingMovies } = this.state;

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Upcoming Movies</Text>
//         {upcomingMovies.map(movie => (
//           <Text key={movie.id}>{movie.title}</Text>
//         ))}
//       </View>
//     );
//   }
// }


// import React from 'react';
// import { View, Text } from 'react-native';
// import { fetchRandomMovie } from '../Services/Api'; // Import the fetchRandomMovie function from api.js

// export default class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       randomMovie: null,
//     };
//   }

//   componentDidMount() {
//     fetchRandomMovie().then(randomMovie => {
//       this.setState({ randomMovie });
//     });
//   }

//   render() {
//     const { randomMovie } = this.state;

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Random Movie</Text>
//         {randomMovie && (
//           <View>
//             <Text>{randomMovie.title}</Text>
//             <Text>{randomMovie.originalTitle}</Text>
//             <Image source={{ uri: randomMovie.image.url }} style={{ width: 100, height: 100 }} />
//           </View>
//         )}
//       </View>
//     );
//   }
// }
