import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputs from '../../components/TextInput';
const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conten}>
        <Text style={styles.text}>Login</Text>
        <TextInputs
        placeholder='email'
        />
        <TextInputs
        keyboardType="numeric"
        placeholder='password'
        />
        <TouchableOpacity>
          <Text>Simpan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Signin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  conten :{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    textAlign:'center'
  },

  text: {
    fontSize: 15,
    marginBottom:20,
    fontWeight: '500',
  },
});