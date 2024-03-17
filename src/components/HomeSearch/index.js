import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { useAuthContext } from '../../contexts/AuthContext'

const HomeSearch = () => {

  const {dbUser} = useAuthContext()
  const navigation = useNavigation()

  const goToDestinationSearch = ()=>{
    navigation.navigate('DestinationSearch')
    // navigation.navigate('OrderScreen')
  }
  
  return (
    <View>
        {/* input box */}
      <Pressable onPress={goToDestinationSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Send To What Location?
        </Text>
        <View style={styles.orderContainer}>
           <FontAwesome5 name={'search-location'} size={30}/>
        </View>
      </Pressable>

      {/* previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
        <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
        </View>
        <Text style={styles.destinationText }>Trans Amadi Port Harcourt</Text>
      </View>

      {/* home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer,{backgroundColor:'#218cff'}]}>
        <Entypo name={'home'} size={16} color={'#535353'}/>
        </View>
        <Text style={styles.destinationText }>{dbUser ? dbUser?.address : 'Home Address'}</Text>
      </View>
    </View>
  )
}

export default HomeSearch
