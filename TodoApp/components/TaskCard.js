import { View, Text } from 'react-native'
import React from 'react'
import { NormalButton } from './Buttons'
import { COLORS, SIZES } from '../constants/themes'
import { Ionicons } from '@expo/vector-icons'

export default TaskCard = ({title, category, status}) => {
  return (
    <View style={{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:5
    }}>
      <View style={{
        width:'40%',
        flexDirection:'column',
        justifyContent:'space-between'
      }}>
        <Text>Title: {title}</Text>
        <Text>Category: {category}</Text>
        <View style={{
            flexDirection:'row'
        }}>
            <Ionicons name='flag-outline' size={SIZES.icon_size} />
            <Text>{status}</Text>
        </View>
        <View style={{
            flexDirection:'row',
        }}>
            <NormalButton 
            btnStyle={{
                backgroundColor: COLORS.GREEN
            }}
            text="Edit" />

            <NormalButton 
            btnStyle={{
                backgroundColor: COLORS.RED,
                marginLeft:10
            }}
            text="Delete" />
            
        </View>
      </View>

      <NormalButton
      btnStyle={{
        backgroundColor:COLORS.YELLOW,
      }}
      text="Pending"
      disabled={true} />
    </View>
  )
}