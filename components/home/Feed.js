import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
export default function Feed() {
  const auth=useSelector(auth=>auth.auth)
  console.log(auth)
  return (
    <View>
      <Text>{auth.token}</Text>
    </View>
  )
}