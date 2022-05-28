import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Screens/Home_Screen';
import Details from './Screens/Details_Screen';

const StackNavigator = createStackNavigator({
    Home : {screen:Home, navigationOptions:{headerShown:true}},
    Details : {screen:Details, navigationOptions:{headerShown:true}} 
})
const AppNavigator = createAppNavigator(StackNavigator)

export default class App extends React.Component{
  render(){
    return (
      <View>
        <AppNavigator/>
      </View>
    );
  }
}