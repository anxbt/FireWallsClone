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
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from "./components/HomeScreen";
// import FullCatogeryScreen from "./components/FullScreen"
// import ImageDisplay from "./components/ImageDisplay"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
	initialRouteName={'Home'}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          animationEnabled: false,
        }}
        mode={'card'}>

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown:false
          }}
          />

        <Stack.Screen 
          name="FullCatogery" 
          component={FullCatogeryScreen} 
          options={{
            headerShown:false,
          }}
          />

        <Stack.Screen 
          name="ImageDisplay" 
          component={ImageDisplay} 
          options={{
            headerShown:false,
          }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}