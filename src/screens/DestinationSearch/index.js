import { View, SafeAreaView, TextInput,} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaceRow from './placeRow';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { useLocationContext } from '../../contexts/LocationContext';


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


const DestinationSearch = () => {
    // const [originPlace, setOriginPlace] = useState(null);
    // const [destinationPlace, setDestinationPlace]= useState(null)
    const {originPlace, destinationPlace, setOriginPlace, setDestinationPlace} = useLocationContext()

    const navigation = useNavigation();
    const originAutocompleteRef = useRef(null);
    const destinationAutocompleteRef = useRef(null);

    useEffect(()=>{
      if(originPlace && destinationPlace){
        navigation.navigate('OrderScreen', {
        originPlace,
        destinationPlace,
      })
      }
    },[originPlace, destinationPlace])

    const clearOriginInput = () => {
      if (originAutocompleteRef.current) {
        originAutocompleteRef.current.setAddressText('');
      }
    };
  
    const clearDestinationInput = () => {
      if (destinationAutocompleteRef.current) {
        destinationAutocompleteRef.current.setAddressText('');
      }
    };

    const renderTopButton = () => (
      <View style={styles.topButton}>
        <AntDesign name="closecircle" size={20} color='#928f8f' onPress={clearOriginInput} />
      </View>
    );

    const renderBottomButton = () => (
      <View style={styles.bottomButton}>
        <AntDesign name="closecircle" size={20} color='#928f8f' onPress={clearDestinationInput} />
      </View>
    );



  return (
      <SafeAreaView>
          <View style={styles.container}>
              
          <GooglePlacesAutocomplete 
                    placeholder='From?'
                    ref={originAutocompleteRef}
                    onPress={(data, details = null) => {
                      setOriginPlace({data, details})
                      
                    }}
                    // renderLeftButton={renderRightButton}
                    renderLeftButton={renderTopButton}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel="Current location"
                    styles={{
                      textInput:styles.textInput,
                      container: styles.autocompleteContainer,
                      listView:styles.listView,
                      separator:styles.separator,
                      poweredContainer: styles.gPoweredContainer
                    }}
                    fetchDetails
                    query={{
                      key: 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY',
                      language: 'en',
                    }}
                    renderRow={(data)=> <PlaceRow data={data}/>
                    }
                    renderDescription={(data)=> data.description || data.vicinity
                    }
                    predefinedPlaces={[homePlace, workPlace]}
                />

              <GooglePlacesAutocomplete 
                    placeholder='Send to?'
                    ref={destinationAutocompleteRef}
                    onPress={(data, details = null) => {
                      setDestinationPlace({data, details})
                      
                    }}
                    renderRightButton={renderBottomButton}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                      textInput:styles.textInput,
                      container:{...styles.autocompleteContainer,top:55
                      },
                      separator:styles.separator,
                      poweredContainer: styles.gPoweredContainer
                    }}
                    fetchDetails
                    query={{
                      key: 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY',
                      language: 'en',
                    }}
                    renderRow={(data)=> <PlaceRow data={data}/>
                    }
                />

                {/* Circle near Origin Input */}
                <View style={styles.circle}/>

                {/* Line between dots */}
                <View style={styles.line}/>

                {/* Square near Destination input */}
                <View style={styles.square}/>
                
          </View>
      </SafeAreaView>
  )
}

export default DestinationSearch