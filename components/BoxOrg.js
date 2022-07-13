import * as React from 'react';
import { Image, Text, StyleSheet, View, Pressable} from 'react-native';

export default function BoxOrg(props) {
  return (
    <Pressable style={styles.btn}>

        <Image style={styles.foto} source={require('../assets/logo.png')}/>
        <View>
        <Text tyle={styles.escritos} style={styles.nomeOrg}>{props.nomeOrg}</Text>
        <Text style={styles.descOrg}> {props.descOrg} </Text>
        </View>

    </Pressable>
    );
  }


const styles = StyleSheet.create({

  escritos:{
    display:'flex',
    flexDirection:'collum'  
  },

  btn: {
    top:'0',
    left:'0',
    marginTop: '2.5vh',
    backgroundColor: '#F5F4F4',
    borderRadius: '10px',
    display:'flex',
    flexDirection:'row',
    width: '90vw',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingRight:'20px',
    paddingLeft:'5px',
    paddingTop:'10px',
    paddingBottom:'5px'

  },

  nomeOrg:{
    color:'#1E1B1B',
    fontSize: '22px',
    fontWeight:'600',
    textAlign:'left',
    maxWidth:'60vw',
    marginBottom:'5px'
  },

  descOrg:{
    fontSize:'12px',
    fontColor:'#434242',
    textAlign:'left',
    maxWidth:'60vw'
  },

  foto:{
    maxWidth:'90px',
    maxHeight:'90px',
    borderRadius:'8px'
  }


});
