import { View, Text, Dimensions } from 'react-native'
import React, {useState} from 'react'
import RouteMap from '../../components/RouteMap'
import AtuaTypes from '../../components/AtuaTypes'
import { useLocationContext } from '../../contexts/LocationContext'

const SearchResults = () => {
  const [selectedType, setSelectedType]= useState(null)
  // const [calculatedPrice, setCalculatedPrice]= useState(null)
  const [duration, setDuration]= useState(10)
  const [distance, setDistance]= useState(0)
  

  const {originPlace, destinationPlace} = useLocationContext()

  handlePriceAndDurationUpdate = (price, mins)=>{
    setCalculatedPrice(price)
    setDuration(mins)
  }


  return (
    <View style={{display:'flex', justifyContent:'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 315}}>
             <RouteMap 
             origin={originPlace} 
             destination={destinationPlace}
            //  onPriceAndDurationUpdate={handlePriceAndDurationUpdate}
             selectedType={selectedType}
             onDistanceUpdate={(distance)=>{
              setDistance(distance)
             }}
             />
        </View>

        <View style={{height:400,}}>
            <AtuaTypes 
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            calculatedPrice={calculatedPrice}
            duration={duration}
            distance={distance}
            />
            
        </View>

    </View>
  )
}

export default SearchResults