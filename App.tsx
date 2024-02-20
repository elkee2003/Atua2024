/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import RootNavigator from './src/Navigation/Root';


const App = ()=>{

   return (
    <>
      <StatusBar/>
      <RootNavigator/>
    </>
  );
}
 

export default App;
