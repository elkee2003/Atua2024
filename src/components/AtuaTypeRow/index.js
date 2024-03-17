import { View, Text, Image, Pressable} from 'react-native'
import React from 'react'

import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const AtuaTypeRow = (props) => {
    const {type, onConfirm, isSelected, calculatedPrice, duration} = props;

    const navigation = useNavigation();

    const onSelectType = () => {
      // Handle type selection and navigation
      onConfirm(); // Confirm the type selection
      navigation.navigate('ReviewOrder', { selectedType: type.type });
    };

    const getImage=()=>{
        if (type.type === 'WALK'){
            return require('../../assets/images/Walk.png')
        }
        if (type.type === 'BIKE'){
            return require('../../assets/images/Bike.jpg')
        }
        if (type.type === 'CAR'){
            return require('../../assets/images/UberXL.jpeg')
        }
        return require('../../assets/images/UberXL.jpeg');
    }


  return (
    <Pressable onPress={onSelectType} style={[styles.container, {backgroundColor:isSelected ? '#efefef':'white'}]}>
        {/* image */}
        <Image style={styles.image} source={getImage()}/>

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
            {type.type} {''}
            <Ionicons name={'person'} size={17}/>
            3
        </Text>
        <Text style={styles.time}>{duration} mins</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
        <Text style={styles.price}>est. ₦{calculatedPrice}</Text>
      </View>
    </Pressable>
  )
}

export default AtuaTypeRow