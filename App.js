import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';



const Stack =createNativeStackNavigator();

const globalScreenOptions ={
  headerStyle:{backgroundColor:"#0DB442"},
  headerNameStyle:{color: "#fff"},
  headerTintColor: "white",
  headerTitleStyle:{textAlign: "center"},
  headerTitleAlign:'center',
}

export default function App() {

    return (
    <NavigationContainer  style={styles.container}>
      <Stack.Navigator  initialRouteName="Home"
      screenOptions={globalScreenOptions} >
        <Stack.Screen options={{title:'Signup'}} name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
