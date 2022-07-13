import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { useFonts, Roboto_800Black } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BoxOrg from '../components/BoxOrg';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../components/Tabs';
import TopBar from '../components/TopBar';
import Org1 from '../assets/ong1.jpg';

export default function Feed({ navigation }) {
  return (
    <View style={styles.center}>
      <TopBar></TopBar>

      <BoxOrg
        imgOrg={Org1}
        nomeOrg="ORGANIZAÇÃO 1"
        descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />
      <BoxOrg
        imgOrg={Org1}
        nomeOrg="ORGANIZAÇÃO 2"
        descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />
      <BoxOrg
        imgOrg={Org1}
        nomeOrg="ORGANIZAÇÃO 3"
        descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />
      <BoxOrg
        imgOrg={Org1}
        nomeOrg="ORGANIZAÇÃO 4"
        descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />
      <BoxOrg
        imgOrg={Org1}
        nomeOrg="ORGANIZAÇÃO 5"
        descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />
      <BoxOrg
        imgOrg={Org1}
        nomeOrg="ORGANIZAÇÃO 6"
        descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: 'E5E5E5',
    padding: '10px',
  },
});
