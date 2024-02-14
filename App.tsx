/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import { withAuthenticator } from '@aws-amplify/ui-react-native';

import RootNavigator from './src/Navigation/Root';

// import { Amplify } from 'aws-amplify';
// import awsconfig from './src/aws-exports';

// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true,
//   },
// });


// import { Amplify } from 'aws-amplify';
// import amplifyconfig from './src/amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);


const App = ()=>{

   return (
    <>
      <StatusBar/>
      <RootNavigator/>
    </>
  );
}
 

export default App;
