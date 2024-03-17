import { View, ScrollView} from 'react-native'
import React from 'react'
import AtuaTypeRow from '../AtuaTypeRow'
import deliveryTypes from '../../assets/data/types'

const AtuaTypes = ({selectedType, setSelectedType, calculatedPrice, duration }) => {

  return (
    <ScrollView>
        {deliveryTypes.map(type => <AtuaTypeRow type={type} 
        key={type.id}
        isSelected={type.type === selectedType}
        onConfirm= {()=>{setSelectedType(type.type)
        }}
        calculatedPrice={calculatedPrice}
        duration={duration}
        />)}
    </ScrollView>
  )
}

export default AtuaTypes