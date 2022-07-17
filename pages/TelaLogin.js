import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { useFonts, Roboto_800Black } from '@expo-google-fonts/inter';

export default function TelaLogin({navigation}) {

  return (

    <View style={styles.center}>

        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.tit}> Bem vindo ao Da um Help </Text>
        <Text style={styles.txt}> Somos um portal para facilitar na comunicação entre pessoas dispostas a fazer o bem assim  como você, e organizações que precisam do  nosso apoio para continuar com seus  incríveis projetos! </Text>
        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("Cadastro")}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
        </Pressable>
        <Pressable style={styles.btnGoogle}>
          <Text style={styles.btnTxtGoogle}>Logar com o Google</Text>
        </Pressable>
        <Pressable style={styles.btnFb}>
          <Text style={styles.btnTxtFb}>Logar com o Facebook</Text>
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
    backgroundColor:'#E5E5E5',
    padding:'10px'
  },

  logo:{
    height:'250px',
    width:'250px',
    marginBottom:'35px'
  },

  tit:{
      fontWeight:'800',
      fontSize:'20px',
      color:'#2C2828'
  },

  txt:{
    marginTop:'10px',
    fontSize:'14px',
    color:'#454343',

  },

  btnTxt:{
    fontSize:'20px',
    color:'#2C2828',
    
  },

  btnCadastro:{
    marginTop:'20px',
    paddingHorizontal:'90px',
    paddingVertical:'9px',
    backgroundColor:'#F4EFEF',
    borderRadius:'15px',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  

  },

    btnFb:{
    marginTop:'20px',
    paddingHorizontal:'40px',
    paddingVertical:'12px',
    backgroundColor:'#395185',
    borderRadius:'15px',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },
  

    btnTxtFb:{
    fontSize:'20px',
    color:'#F4EFEF',
    whiteSpace:'nowrap',
    textAlign:'right'

  },

    btnGoogle:{
    marginTop:'20px',
    paddingHorizontal:'50px',
    paddingVertical:'12px',
    backgroundColor:'#F4EFEF',
    borderRadius:'15px',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },

    btnTxtGoogle:{
    fontSize:'20px',
    color:'#2C2828',
    whiteSpace:'nowrap'

  },


  
  });