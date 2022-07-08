import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { getTweets } from '../controllers/controllers'
export default function Feed() {
  const auth=useSelector(state=>state.auth)
  const userTweets=useSelector(state=>state.tweets)
  return (
    <View>
      <Text>{auth.token}</Text>
      <Text>{auth.user}</Text>
      <Text>{userTweets.tweets[0]}</Text>
    </View>
  )
}