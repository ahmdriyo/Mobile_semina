import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputs = ({name,value,keyboardType,onChange,placeholder}) => {
  return (
    <TextInput
    style={styles.textInput}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    keyboardType={keyboardType}
    >
    </TextInput>
  )
}

export default TextInputs

const styles = StyleSheet.create({
  textInput:{
    width:'80%',
    alignContent:'center',
    justifyContent:'center',
    
    marginBottom:10,
    height:50,
    borderWidth:2,
    borderRadius:10,
    opacity:0.7,
    borderColor:'black',
    paddingLeft:12,
  },
})