import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
// import { Auth } from 'aws-amplify';
import styles from './styles';
// import { useAuthContext } from '../contexts/AuthContext';
import { signOut } from 'aws-amplify/auth';

const CustomDrawer = (props) => {
  // const {dbUser} = useAuthContext()

  const handleSignOut = async()=> {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        {/* User Row */}
        <Pressable onPress={()=>props.navigation.navigate('ProfileScreen')}>
          <View style={styles.userRow}>
            <View style={styles.userImage}/>
            <View>
                <Text style={styles.userProfile}>dbUser?.name</Text>
                <Text style={styles.userRate}>5.00 *</Text>
            </View>
        </View>
        </Pressable>
        
        {/* Messages Row */}
        <Pressable onPress={()=>console.warn('Messages')}>
            <Text style={styles.messageRow}>
                Messages
            </Text>
        </Pressable>

        {/* Do more */}
        <Pressable onPress={()=>console.warn('Do more with account')}>
            <Text style={styles.doMore}>
                Do more with your account
            </Text>
        </Pressable>

        {/* Make money */}
        <Pressable onPress={()=>console.warn('Make money delivering')}>
            <Text style={styles.makeMoney}>
                Make money delivering
            </Text>
        </Pressable>

      </View>

      <DrawerItemList {...props}/>

            {/* logout */}
      <Pressable onPress={handleSignOut}>
        <Text style={styles.logOut}>
                Logout
        </Text>
      </Pressable>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer