import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/themes'

const Header = () => {
  return (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        // margin:10
    }}>
      <Ionicons name='menu-outline' size={30} color={COLORS.BLACK} />
      <View />
      <View />
    </View>
  )
}

export default Header