// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Bottom from "./Components/Bottom"

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Bottom/>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import SettingsScreen from './Components/SettingsScreen';
import {NavigationContainer} from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style={{ flex:1,padding:2}}>

       <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  
    </View>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})