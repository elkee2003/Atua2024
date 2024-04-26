import { ScrollView, View, Text, Pressable } from 'react-native'
import React,{useEffect,useState} from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLocationContext } from '../../contexts/LocationContext'
import { useAuthContext } from '../../contexts/AuthContext'
import { useOrderContext } from '../../contexts/OrderContext'
import { DataStore } from 'aws-amplify/datastore';
import { Order } from '../../models'


const ReviewOrderDetails = () => {

    const {recipientName, recipientNumber, orderDetails, setRecipientName, setRecipientNumber, setOrderDetails, createOrder} = useOrderContext()

    const {originPlace, destinationPlace,setOriginPlace, setDestinationPlace} = useLocationContext()

    const navigation= useNavigation()
    const route = useRoute()
    const {selectedType}= route.params

    // const {dbUser}= useAuthContext()

    // const goToHomeScreen = async ()=>{
    //     if(recipientName && recipientNumber.length >= 11 ){
    //         navigation.navigate('HomeScreen')
    //         // createOrder()
    //         // setRecipientName('')
    //         // setRecipientNumber('')
    //         // setOrderDetails('') 
    //         // setOriginPlace('')
    //         // setDestinationPlace('')
    //     }   
    // } 

    
    const gotohomescreen=()=>{
        console.warn('go to home')
    }


  return (
    <ScrollView style={styles.container}>
        <View style={styles.firstTxtRow}>
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
        <View style={styles.txtRow}>
            <Text style={styles.txtTitle}>Mode Of Delivery:{" "}</Text>
            <Text style={styles.txt}>{selectedType}</Text>
        </View>
        <View style={styles.txtRow}>
            <Text style={styles.txtTitle}>From:{" "}</Text>
            <Text style={styles.txt}>{originPlace.data?.description || details?.formatted_address}</Text>
        </View>
        <View style={styles.txtRow}>
            <Text style={styles.txtTitle}>To:{" "}</Text>
            <Text style={styles.txt}>{destinationPlace.data?.description || details?.formatted_address}</Text>
        </View>
        <Pressable
        onPress={createOrder}
        style={styles.btn}>
            <Text style={styles.btnTxt}>
                Order!
            </Text>
        </Pressable>
        <Pressable onPress={()=>navigation.goBack()} style={styles.bckBtn}>
              <Ionicons name={'arrow-back'} size={40} color={'white'}/>
        </Pressable>
    </ScrollView>
  )
}

export default ReviewOrderDetails