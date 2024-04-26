// import '@azure/core-asynciterator-polyfill'
import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native'
import React, {useEffect, useState, } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles'
import { useAuthContext } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { signOut } from 'aws-amplify/auth';
import { DataStore } from 'aws-amplify/datastore';
import {User} from '../../models'


const ProfileScreen = () => {

  const {sub, dbUser, setDbUser} = useAuthContext()

  const handleSignOut = async()=> {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  
    const [name, setName] = useState(dbUser?.name || "")
    const [address, setAddress] = useState(dbUser?.address || "")
    const [phoneNumber, setPhoneNumber]= useState(dbUser?.phoneNumber || "")
    const [lat, setLat] = useState(dbUser?.lat.toString() || "0")
    const [lng, setLng] = useState (dbUser?.lng.toString() || "0") 
    
    const [phoneNumberError, setPhoneNumberError] = useState('')
    
    const [isFocused, setIsFocused] = useState(false);
   
    const navigation = useNavigation()



    // Start of Function to Create and Update User

    const createUser = async ()=>{
      try{
        const user = await DataStore.save(new User({
         name, 
         address,
         phoneNumber,
         lat:parseFloat(lat), 
         lng:parseFloat(lng), 
         sub
       })
       );
       console.log("I am User:",user)
       setDbUser(user)
     }catch(e){
       Alert.alert("Error", e.message)
     }
    }

    const updateUser= async ()=>{
      const user = await DataStore.save(User.copyOf(dbUser, (updated)=>{
        updated.name = name;
        updated.address = address;
        updated.phoneNumber = phoneNumber
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);
      }))
      setDbUser(user)
    }
    // End Of Function to Create and Update User

    // Function to Save Data
    const onSave= async()=>{
      if(phoneNumber.length < 11){
        setPhoneNumberError('Phone number must be at least 11 characters.')
        return; 
        // the return stop it from either creating a user or updating a user, in other words, it stop the other if statements if the requirements are not met. Note that if you add else without the return, it will still create or update user while still showing the message.
      }else{
        setPhoneNumberError('')
      }

      if(dbUser){
        await updateUser()
        navigation.goBack()
      }else{
        await createUser()
        navigation.navigate('OrderScreen')
      }
      // navigation.goBack()
    }

    // function to handle focus
    const handleFocusChange = (focused) => {
      setIsFocused(focused);
    };

    // Start Of GooglePlacesAutoComplete
    const handlePlaceSelect = (data, details = null) => {
      // Extract the address from the selected place
      const selectedAddress = data?.description || details?.formatted_address;

      const selectedAddylat = JSON.stringify(details?.geometry?.location.lat) 

      const selectedAddylng = JSON.stringify(details?.geometry?.location.lng) 

      console.log(selectedAddylng, selectedAddylat)
  
      // Update the address state
      setAddress(selectedAddress);
      setLat(selectedAddylat)
      setLng(selectedAddylng)
  
    };
    // End Of GooglePlacesAutoComplete

    return (
    <View style={styles.container}>

      <Text style={styles.title}>Profile</Text>

      <TextInput 
      value={name}
      onChangeText={setName}
      placeholder='Name'
      style={styles.input}
      />

      <TextInput 
      value={address}
      placeholder='Address'
      style={{...styles.input, color: '#04df04'}}
      />

      <View style={isFocused ? styles.gContainerFocused : styles.gContainer}>
        <GooglePlacesAutocomplete
        fetchDetails
        placeholder='Select Address From Here'
        onPress={handlePlaceSelect}
        textInputProps={{
          onFocus:() => handleFocusChange(true),
          onBlur:() => handleFocusChange(false)
        }} 
        styles={{
          textInput:styles.gTextInput,
          textInputContainer:styles.gTextInputContainer,
          listView:styles.glistView,
          poweredContainer:styles.gPoweredContainer
        }}
        query={{
          key: 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY',
          language: 'en',
        }}
        />
      </View>

    {/* TextInputs that will be below GooglePlacesAutocomplete */}
    
      <TextInput
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      placeholder='Phone Number'
      style={styles.input}
      />
      {phoneNumberError ? (
        <Text style={styles.error}>{phoneNumberError}</Text>
      ) : null}

      <TextInput 
      value={lat}
      placeholder='Latitude'
      style={styles.input}
      />

      <TextInput 
      value={lng}
      placeholder='Longitude'
      style={styles.input}
      />

      <View style={styles.scrnBtn}>
        {/* Save */}
        <Pressable onPress={onSave} style={styles.saveBackground}>
          <Text style={styles.save}>
            Save
          </Text>
        </Pressable>
        
        {/* SignOut */}
        <Pressable onPress={handleSignOut} >
          <Text style={styles.signOut}>
            Sign out
          </Text>
        </Pressable>
      </View>
      
    </View>
  )
}

export default ProfileScreen