import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../constants/themes'

export const NormalButton = ({btnStyle, text, disabled=false}) => {
  return (
    <TouchableOpacity style={{
        ...btnStyle,
        borderRadius:5,
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    }}
    disabled={disabled}>
      <Text style={{
        color:COLORS.WHITE,
        fontFamily:FONT.regular
      }}>{text}</Text>
    </TouchableOpacity>
  )
}