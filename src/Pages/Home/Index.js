import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../../../assets/logo_white.png'
import React from 'react'

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8C52FF',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logo: {
        width: '100%',
    },
  })
  return (
    <View style={styles.container}>
        <View style={{ width: 300}}>
                <Image resizeMode='contain' source={Logo} style={styles.logo}/>
            </View>
    </View>
  )
}