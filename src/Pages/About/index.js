import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../../../assets/logo_white.png'
import * as constants from '../../constantes'

export default function About() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8C52FF',
      padding: 40,
      paddingTop: 10,
      alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    caption: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'center',
    },
    logo: {
        width: '100%',
    },
  })
  return (
    <View style={styles.container}>
        <View style={{ width: 200}}>
            <Image resizeMode='contain' source={Logo} style={styles.logo}/>
        </View>
      <Text style={styles.text}>Sobre nós</Text>
      <Text style={styles.caption}>{constants.TEXT_ABOUT}</Text>
    </View>
  )
}