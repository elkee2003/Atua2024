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

    const [recipientNameError, setRecipientNameError] = useState('');
    const [recipientNumberError, setRecipientNumberError] = useState('');

    const navigation = useNavigation()

    const goToReviewOrder = ()=>{
        let hasError = false;

        if(!recipientName.trim()){
            setRecipientNameError('Kindly input the name of recipient.')
            hasError= true;
        }else{
            setRecipientNameError('')
        }

        if(recipientNumber.length < 11){
            setRecipientNumberError('Phone number must be at least 11 characters.')
            hasError = true;
        }else{
            setRecipientNumberError(" ")
        }

        if(!hasError){
            navigation.navigate('SearchResults')
        }
    }

    // const goToReviewOrder = ()=>{
    //     if(recipientName && recipientNumber.length >= 11){
    //         navigation.navigate('SearchResults')
    //     }else{
    //       Alert.alert('Kindly fill in the fields correctly. Thank you.')
    //     }
    // }

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
            {recipientNameError ? <Text style={styles.error}>{recipientNameError}</Text> : null}
            <TextInput
            style={styles.input}
            value={recipientNumber}
            onChangeText={(text)=>setRecipientNumber(text)}
            multiline
            placeholder='eg: 08030000000'
            keyboardType='number-pad'
            />
            {recipientNumberError ? <Text style={styles.error}>{recipientNumberError}</Text> : null}
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