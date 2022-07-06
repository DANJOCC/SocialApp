import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import {NormalNavigationButtom} from '../bouncer/CustomButtoms'

export default function Login(){
  return (
    <View>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='password'/>
      <NormalNavigationButtom text='login'/>
    </View>
  )
}

const styles = StyleSheet.create({})