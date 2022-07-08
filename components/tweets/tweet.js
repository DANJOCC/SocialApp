import { View, Text } from 'react-native'
import React from 'react'

export default function Tweet({item}) {
  return (
    <View>
      <Text>
        {item}
      </Text>
    </View>
  )
}