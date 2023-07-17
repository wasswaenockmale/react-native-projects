import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Header, NormalButton } from '../components'
import { Formik } from 'formik'
import * as yup from 'yup'
import { COLORS } from '../constants/themes'

const NewTask = () => {
  return (
    <View style={{
        padding:10,
        // borderWidth:1
    }}>
        <Header />
        <Formik 
        initialValues={{title:'', description:'',category:'', status:'', priority:'', due_date:''}}
        onSubmit={() => console.log(values)}
        validationSchema={yup.object().shape({
            title:yup
            .string()
            .required(),
            description:yup.string()
            .required(),
            category: yup.string()
            .required(),
            status: yup.string()
            .required(),
            priority:yup.string()
            .required(),
            due_date: yup.string()
            .required() 
        })}
        >
            {({
                values,
                errors,
                touched,
                isValid,
                setFieldTouched,
                handleChange, 
                handleSubmit 
            }) => 
                <View>
                    <Text style={{
                        marginBottom:20,
                        marginTop:10
                    }}>Add New Task</Text>
                    <View>
                        <Text>Title</Text>
                        <TextInput style={{
                            borderWidth:1,
                            borderRadius:5,
                            width:'90%',
                            padding:5,
                            marginBottom:20
                        }}/>
                    </View>
                    <View>
                        <Text>Description</Text>
                        <TextInput style={{
                            borderWidth:1,
                            borderRadius:5,
                            width:'90%',
                            // padding:5,
                            marginBottom:20
                        }}
                        multiline
                        numberOfLines={5}/>
                    </View>
                    <View>
                        <Text>Category</Text>
                        <TextInput style={{
                            borderWidth:1,
                            borderRadius:5,
                            width:'90%',
                            padding:5,
                            marginBottom:20
                        }}/>
                    </View>
                    <View>
                        <Text>Status</Text>
                        <TextInput style={{
                            borderWidth:1,
                            borderRadius:5,
                            width:'90%',
                            padding:5,
                            marginBottom:20
                        }}/>
                    </View>
                    <View>
                        <Text>Priority</Text>
                        <TextInput style={{
                            borderWidth:1,
                            borderRadius:5,
                            width:'90%',
                            padding:5,
                            marginBottom:20
                        }}/>
                    </View>
                    <View>
                        <Text>Due date</Text>
                        <TextInput style={{
                            borderWidth:1,
                            borderRadius:5,
                            width:'90%',
                            padding:5,
                            marginBottom:20
                        }}/>
                    </View>

                    <NormalButton
                    btnStyle={{
                        backgroundColor:COLORS.BLUE,
                        width:'20%'
                    }}
                    text='Submit'
                    />
            </View>
            }
        </Formik>
        {/* <StatusBar barStyle='dark-content' backgroundColor={COLORS.BLACK}/> */}
    </View>
  )
}

export default NewTask
