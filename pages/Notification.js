import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { useFonts, Roboto_800Black } from '@expo-google-fonts/inter';
import BoxOrg from '../components/BoxOrg';

export default function Notification({navigation}) {

  return (

    <View style={styles.center}>

        <Text>Notificação</Text>

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

  });