import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Tweet from './Tweet'

export default function TweetsList({tweets}) {
  tweets.forEach((tweet,index) => {
    tweet={
      ...tweet,
      key: index
    }
  });
  return (
    <View>
      <FlatList
      data={tweets}
      renderItem={Tweet}
      keyExtractor={(item)=> item.key }
      />
    </View>
  )
}