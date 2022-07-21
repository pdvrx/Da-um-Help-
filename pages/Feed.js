import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image,  } from 'react-native';
import BoxOrg from '../components/BoxOrg';

import TopBar from '../components/TopBar';
import Org1 from '../assets/ong1.jpg';

export default function Feed({ navigation }) {
  return (
    
        <View style={styles.center}>
          <TopBar></TopBar>

          <BoxOrg
            imgOrg={'../assets/ong1.jpg'}
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
          <BoxOrg
            imgOrg={Org1}
            nomeOrg="ORGANIZAÇÃO 7"
            descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />
          <BoxOrg
            imgOrg={Org1}
            nomeOrg="ORGANIZAÇÃO 8"
            descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />
          <BoxOrg
            imgOrg={Org1}
            nomeOrg="ORGANIZAÇÃO 9"
            descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />
          <BoxOrg
            imgOrg={Org1}
            nomeOrg="ORGANIZAÇÃO 10"
            descOrg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />
          <BoxOrg
            imgOrg={Org1}
            nomeOrg="ORGANIZAÇÃO 11"
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
