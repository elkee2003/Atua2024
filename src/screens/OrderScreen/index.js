import { View, Text, TextInput, Pressable, ScrollView, TouchableWithoutFeedback,Keyboard, Alert } from 'react-native'
import React,{useState,} from 'react'
import styles from './styles'
import { useOrderContext } from '../../contexts/OrderContext'
import { useNavigation } from '@react-navigation/native'

const OrderScreen = () => {

    // const dismissKeyboard = () => {
    //       Keyboard.dismiss();
    //     };

    const {recipientName, recipientNumber, orderDetails, setRecipientName, setRecipientNumber, setOrderDetails, orders, setOrders,} = useOrderContext()

    const navigation = useNavigation()

    const goToReviewOrder = ()=>{
        if(recipientName && recipientNumber.length >= 11){
            navigation.navigate('SearchResults')
        }else{
          Alert.alert('Kindly fill in the fields correctly. Thank you.')
        }
    }

  return (
      <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={styles.header}>Recipient / Package Details:</Text>
            <TextInput
            style={styles.input}
            value={recipientName}
            onChangeText={(text)=>setRecipientName(text)}
            multiline
            placeholder='Sending to eg: Opus'
            />
            <TextInput
            style={styles.input}
            value={recipientNumber}
            onChangeText={(text)=>setRecipientNumber(text)}
            multiline
            placeholder='eg: 08030000000'
            keyboardType='number-pad'
            />
            <TextInput
            style={styles.description}
            value={orderDetails}
            onChangeText={(text)=>setOrderDetails(text)}
            multiline
            placeholder='eg: Letter, Food, Clothes, Breakable Items etc. You can also drop a short note. Kindly make it as short as possible'
            />
            <Pressable 
            onPress={goToReviewOrder}
            style={styles.btn}>
                <Text style={styles.btnTxt}>
                    Done
                </Text>
            </Pressable>
          </View>
      </TouchableWithoutFeedback>
  )
}

export default OrderScreen