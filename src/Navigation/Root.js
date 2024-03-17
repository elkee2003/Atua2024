import React from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import HomeNavigator from './Home';
import ProfileScreen from '../screens/ProfileScreen';
import OrderListScreen from '../screens/OrderListScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AuthContextProvider from '../contexts/AuthContext';
import OrderContextProvider from '../contexts/OrderContext';
import LocationContextProvider from '../contexts/LocationContext';

const Drawer = createDrawerNavigator();

const CustomDrawerButton = ({onPress})=>{
  return (
    <TouchableOpacity onPress={onPress} style={{marginLeft:15}}>
      <FontAwesome name='navicon' size={60} color='black'/>
    </TouchableOpacity>
  );
}

const DummyScreen = (props)=>{
  <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text>
      {props.name}
    </Text>
  </View>
}

const RootNavigator = () => {

  return (
    <NavigationContainer>

      <AuthContextProvider>
        <OrderContextProvider>
          <LocationContextProvider>
            <Drawer.Navigator
              drawerContent={(props)=><CustomDrawer {...props}/>}
              edgeWidth={500} 
              screenOptions={{headerShown:false}} 
            >
              
              <Drawer.Screen name='Home' component= {HomeNavigator}
              options={({ navigation }) => ({
                headerLeft: () => <CustomDrawerButton onPress={() => navigation.openDrawer()} />,
              })}
              /> 
              
              <Drawer.Screen name="Profile" component={ProfileScreen}/>

              <Drawer.Screen name="Your Orders" component={OrderListScreen}/>

              {/* Rendering of Other Screens */}  
              <Drawer.Screen name='Help'>
                {()=><DummyScreen name={'ThisHelp'}/>}
              </Drawer.Screen>
              <Drawer.Screen name='Wallet'>
                {()=><DummyScreen name={'ThisWallet'}/>}
              </Drawer.Screen>
              <Drawer.Screen name='Settings'>
              {()=><DummyScreen name={'ThisSettings'}/>}
              </Drawer.Screen>

            </Drawer.Navigator>
          </LocationContextProvider>
        </OrderContextProvider>
      </AuthContextProvider>

    </NavigationContainer>
  )
}

export default RootNavigator;