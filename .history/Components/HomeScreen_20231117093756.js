
// import { View, Text } from 'react-native'
// export default function HomeScreen({images}) {

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home</Text>
//         </View>
//     )
// }

import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

const Card = ({ imageSource, title }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView>
      <Card imageSource={require('./Wallapers/pexels-deepu-b-iyer-40465.jpg')}  />
      <Card imageSource={require('./Wallapers/pexels-eberhard-grossgasteiger-1366913.jpg')}  />
      {/* Add more Card components as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;


