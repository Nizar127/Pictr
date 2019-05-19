import React, {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import loginScreen from './screens/loginScreen';
import dashboardScreen from './screens/dashboardScreen';
import loadingScreen from './screens/loadingScreen';
import firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render() {
    return(
      <AppNavigator/>
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  loadingScreen: loadingScreen,
  loginScreen: loginScreen,
  dashboardScreen: dashboardScreen
})

const AppNavigator = createAppContainer 
(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
