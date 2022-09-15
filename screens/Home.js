import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import TodoList from '../components/TodoList';
import { todosData } from '../data/todos';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Home() {

  const [localData, setLocalData] = useState( 
    todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}),
  );

  const [isHidden, setIsHidden] = useState(false);
  const navigation = useNavigation();

  const handleHidePress = () => {
    if (isHidden) {
      setIsHidden(false)
      setLocalData(todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}))
      return;
    }
      setIsHidden(!isHidden)
      setLocalData(localData.filter(todo => !todo.isCompleted))
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-cleaning-1593202999.jpg'}}
      style={styles.pic}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={handleHidePress}>
          <Text style={{color: '#3478f6'}}>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData = {localData.filter(todo => todo.isToday)}/>
      <Text style={styles.title}>Tomorrow</Text>
      <TodoList todosData = {todosData.filter(todo => !todo.isToday)}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add')}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: 40,
    paddingHorizontal: 15
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: 'flex-end'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 30,
    right: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: .5,
  shadowRadius: 5,
  elevation: 5,
},
plus: {
  fontSize: 40,
  color: '#fff',
  position: 'absolute',
  top: -8,
  left: 9,
}
});
