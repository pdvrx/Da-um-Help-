import * as React from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { useFonts, Roboto_800Black } from '@expo-google-fonts/inter';

export default function TelaLogin({navigation}) {

  return (

    <View style={styles.center}>

        <Image style={styles.logo} source={require('../assets/logo.png')}/>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu Email"
                  keyboardType="numeric"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Insira sua senha"
                  keyboardType="numeric"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Repita sua senha"
                  keyboardType="numeric"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu cpf"
                  keyboardType="numeric"
                  >
              </TextInput>
      </View>

        <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua data de nascimento"
                  keyboardType="numeric"
                  >
              </TextInput>
      </View>



        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("Feed")}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
        </Pressable>



    </View>
  );
}

const styles = StyleSheet.create({
  center:{
    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    textAlign:'center',
    backgroundColor:'E5E5E5',
    padding:'10px'
  },

  inputbox:{
    paddingHorizontal:'20px',
    paddingVertical:'8px',
    backgroundColor:'#F5F4F4',
    borderRadius:'15px',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom:'10px'
  },

  logo:{
    height:'250px',
    width:'250px',
    marginBottom:'10px'
  },

  btnTxt:{
    fontSize:'30px',
    whiteSpace:'nowrap',
    color:'#FFFFFF',
    fontWeight:'600',
    
  },

  btnCadastro:{
    paddingHorizontal:'65px',
    paddingVertical:'13px',
    backgroundColor:'#38C7A5',
    borderRadius:'15px',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop:'15px'
  
  },

  txtInput:{

    marginVertical:'10px',
    border:0,
    borderBottom: '2px solid rgb(200,200,200)',
    width:'265px',
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0


  },


  
  });