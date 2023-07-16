import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../components'
import { FONT } from '../constants/themes'

export const TaskDetails = () => {
  return (
    <View style={{
        padding:10
    }}>
      <Header />
      <View>
        <Text style={{
            marginTop:20,
            marginBottom:20,
            fontFamily:FONT.bold
        }}>Task Details</Text>
      </View>

      <View>
        <Text>Title</Text>
        <Text>{}</Text>
      </View>
    </View>
  )
}