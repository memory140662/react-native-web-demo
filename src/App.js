import React, { useState } from 'react'

import {
  View,
  FlatList
} from 'react-native'
import RW from 'random-words'
import {
  ListItem,
  SearchBar
} from 'react-native-elements'

const list = []
for (let i = 0; i < 20; i++) {
  list.push({
    title: RW(),
    subtitle: RW(),
    key: i + '',
  })
}

function App() {
  const [ search, setSearch ] = useState('')
  return (
    <View>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
        }
      `}</style>
      <SearchBar 
        placeholder="Search Text..."
        onChangeText={text => setSearch(text)}
        value={search}
      />
      <FlatList 
        data={list.filter(data => data.title.indexOf(search) !== -1)}
        renderItem={({item}) => <ListItem 
          key={item.key} 
          {...item}
          bottomDivider
          chevron
        />}
      />
    </View> 
  )
}

export default App
