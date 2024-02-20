import { View, Text,Pressable} from 'react-native'
import React from 'react'

import styles from './styles'
import AtuaTypeRow from '../AtuaTypeRow'
import deliveryTypes from '../../assets/data/types'

const AtuaTypes = ({typeState}) => {
  const [selectedType, setSelectedType] = typeState

  const confirm = () =>{
    console.warn('Confirm delivery')
  }

  return (
    <View>
        {deliveryTypes.map(type => <AtuaTypeRow type={type} 
        key={type.id}
        isSelected={type.type === selectedType}
        onConfirm= {()=>setSelectedType(type.type)}
        />)}

        <Pressable onPress={confirm} style={styles.confirmBtn}>
            <Text style={styles.text}>Confirm Delivery</Text>
        </Pressable>
    </View>
  )
}

export default AtuaTypes