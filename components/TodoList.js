import { FlatList } from 'react-native'
import React from 'react'
import Todo from './Todo';

export default function TodoList({todosData}) {
  return (
    <FlatList
        data={todosData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Todo {...item}/>}
    />
  )
}
