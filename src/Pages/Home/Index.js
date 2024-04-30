import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8C52FF'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  )
}