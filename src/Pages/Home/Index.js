import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Index() {
  const styles = StyleSheet.Create({
    container: {
      flex: 1,
      backgroundColor: '#8C52FF'
    }
  })
  return (
    <View style={styles.container}>
      <Text>Tela home</Text>
    </View>
  )
}