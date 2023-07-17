import { View, Text } from 'react-native'
import React from 'react'
import {Header} from '../components/index'
import { COLORS, FONT, SIZES } from '../constants/themes'
import { NormalButton } from '../components'


const Dashboard = () => {
  return (
    <View style={{
        padding:20
    }}>
      <Header />
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
        <Text style={{
            fontFamily:FONT.bold,
            fontSize:SIZES.large,
            color:COLORS.BLACK,
            // margin: 10
        }}>Task</Text>
        <NormalButton  btnStyle={{
            backgroundColor:COLORS.BLUE,
            // margin:10,
            width:'30%'
        }} 
        text="Add Task"/>
      </View>

      {/* This is where the flatList should go */}
    </View>
  )
}

export default Dashboard;