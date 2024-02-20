import { ScrollView, View, Text, Pressable } from 'react-native'
import React,{useEffect,useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
// import {DataStore} from 'aws-amplify'
// import { useAuthContext } from '../../contexts/AuthContext'
// import { useOrderContext } from '../../contexts/OrderContext'

const ReviewOrderDetails = ({changeSetIsShowModalToFalse}) => {

    // const {recipientName, recipientNumber, orderDetails, setRecipientName, setRecipientNumber, setOrderDetails, createOrder} = useOrderContext()

    const navigation= useNavigation()

    // const {dbUser}= useAuthContext()

    const goToSearchResults = async ()=>{
        if(recipientName && recipientNumber.length >= 11 ){
            navigation.navigate('SearchResults')
            createOrder()
            setRecipientName('')
            setRecipientNumber('')
            setOrderDetails('') 
        }   
    } 


  return (
    <View style={styles.container}>
        <View style={styles.txtRow}>
            <Text style={styles.txtTitle}>Recipient's Name:{" "}</Text>
            <Text style={styles.txt}>{recipientName}</Text>
        </View>
        <View style={styles.txtRow}>
            <Text style={styles.txtTitle}> Recipient's Phone Number:{" "}</Text>
            <Text style={styles.txt}>{recipientNumber}</Text>
        </View>
        <View style={styles.txtRow}>
            <Text style={styles.txtTitle}>Details Of Order:{" "}</Text>
            <Text style={styles.txt}>{orderDetails}</Text>
        </View>
        <Pressable
        onPress={goToSearchResults}
        style={styles.btn}>
            <Text style={styles.btnTxt}>
                Done!
            </Text>
        </Pressable>
        <Pressable onPress={()=>changeSetIsShowModalToFalse()} style={styles.bckBtn}>
              <Ionicons name={'arrow-back'} size={40} color={'white'}/>
        </Pressable>
    </View>
  )
}

export default ReviewOrderDetails