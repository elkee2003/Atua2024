import { View, Text, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination, onPriceAndDurationUpdate, selectedType, onDistanceUpdate, onDurationUpdate}) => {

  const GOOGLE_MAPS_APIKEY = 'AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY';

  const originLoc = {
    latitude:origin.details.geometry.location.lat,
    longitude:origin.details.geometry.location.lng
  }
  const destinationLoc = {
    latitude:destination.details.geometry.location.lat,
    longitude:destination.details.geometry.location.lng
  }

  const [totalMins, setTotalMins]= useState(0);
  const [totalKm, setTotalKm]= useState(0);
  const [price, setPrice] = useState(null);

  // const calculatePrice = (distance) => {
  //   if (distance <= 1.3) {
  //     return 600;
  //   } else if (distance  <= 5) {
  //     return 800 * distance;
  //   } else if (distance <= 20) {
  //     return 230 * distance;
  //   } else {
  //     // You can add additional pricing logic for distances beyond 20km
  //     return 250;
  //   }
  // };

  // const calculatePrice = (distance, selectedType)=>{
  //   if (selectedType === 'WALK'){
  //     if(distance <= 1){
  //       return 600;
  //     }else if (distance <= 7){
  //       return 350 * distance;
  //     }else if (distance <=20){
  //       return 280 * distance;
  //     }else{
  //       return 200 * distance;
  //     }
  //   }else if (selectedType === 'BIKE') {
  //     if (distance <= 1) {
  //       return 700
  //     } else if (distance <= 7) {
  //       return 400 * distance;
  //     } else if (distance <=20){
  //       return 300 * distance;
  //     }else {
  //       return 250 * distance;
  //     }
  //   }else if (selectedType === 'CAR') {
  //     if (distance <= 1) {
  //       return 800;
  //     } else if (distance <= 7) {
  //       return 500 * distance;
  //     } else if (distance <=20){
  //       return 320 * distance;
  //     }else {
  //       return 270 * distance;
  //     }
  //   }else if (selectedType === 'GROUP') {
  //     if (distance <= 1) {
  //       return 600;
  //     } else if (distance <= 7) {
  //       return 300 * distance;
  //     } else if (distance <=20){
  //       return 215 * distance;
  //     }else {
  //       return 200 * distance;
  //     }
  //   }
  //   // Default to 0 if type not recognized
  //   return 101;
  // }
  

  const onDirectionReady = (result) => {
    const distance = result.distance;
    const duration = result.duration;

    console.log('Distance', distance)
    // console.log('Selected Type', selectedType)

    // Assuming $0.50 per kilometer
    // const ratePerKm = 0.5;
    // const calculatedPrice = distance * ratePerKm;

    setTotalKm(distance.toFixed(2))
    setTotalMins(duration.toFixed(0))
    onDistanceUpdate(distance)
    onDurationUpdate(duration)
    // const calculatedPrice = calculatePrice(distance, selectedType)
    // setPrice(calculatedPrice)
    // onPriceAndDurationUpdate(calculatedPrice.toFixed(0), duration.toFixed(0))
  };

  return ( 
      <MapView
      style={{height:'100%', width:'100%'}}
       provider={PROVIDER_GOOGLE} 
       showsUserLocation={true}
       region={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >

        <MapViewDirections
            origin={originLoc}
            destination={destinationLoc}
            apikey={GOOGLE_MAPS_APIKEY}
            timePrecision='now'
            strokeWidth={4}
            strokeColor="black"
            onReady={onDirectionReady}
        />

        <Marker
              coordinate={originLoc}
              title={'Origin'}
        />

        <Marker
              coordinate={destinationLoc}
              title={'Destination'}
        />

     </MapView>
  )
}

export default RouteMap