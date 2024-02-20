import { View, Text, Dimensions } from 'react-native'
import React, {useState} from 'react'
import RouteMap from '../../components/RouteMap'
import AtuaTypes from '../../components/AtuaTypes'
import { useLocationContext } from '../../contexts/LocationContext'

const SearchResults = () => {
  const typeState = useState(null)

  const {originPlace, destinationPlace} = useLocationContext()

  return (
    <View style={{display:'flex', justifyContent:'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 415}}>
             <RouteMap origin={originPlace} destination={destinationPlace}/>
        </View>

        <View style={{height:400,}}>
            <AtuaTypes typeState={typeState}/>
        </View>

    </View>
  )
}

export default SearchResults