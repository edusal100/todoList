import {Button, Platform, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'

import DateTimePicker from '@react-native-community/datetimepicker'

export default function AddTodo() {

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [isToday, setIsToday] = useState(false);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    if (Platform.OS === 'android') {
      setShow(false);
    }
  };

  const showPicker = () => {
    if (Platform.OS === 'android') {
      setShow(true);
  }};

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Add Task</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
          style={styles.textInput}
          placeholder='Task'
          placeholderTextColor={'#00000030'}
          onChangeText={(text) => {setName(text)}}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Hour</Text>
          
          {show && (<DateTimePicker
            value={date}
            mode={'time'}
            is24Hour={false}
            onChange={onChange}
            style={{width: '80%'}}
          />
          )}
        <View>
          <TouchableOpacity onPress={showPicker} style={styles.buttonSmall}>
            <Text>Select</Text>
            </TouchableOpacity> 
        </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Today</Text>
          <Switch
          value={isToday}
          onValueChange={(value) => {setIsToday(value)}}/>
        </View>
        <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white'}}>Done</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: '#00000030',
    borderBottomWidth: 1,
    width: '80%',
  },
  inputContainer:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 46,
    borderRadius: 11,
  },
  buttonSmall: {
    height: 30,
    paddingHorizontal: 20,
    justifyContent:'center'
  }
})