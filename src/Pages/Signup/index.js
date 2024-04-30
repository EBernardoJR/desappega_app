import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Logo from '../../../assets/logo_white.png'

export default function Signup() {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#8C52FF',
            flex: 1,
            margin: 0,
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center'
        },
        input: {
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderColor: '#fff',
            borderRadius: 20,
            borderWidth: 2,
            marginVertical: 15,
            color: '#fff',
            width: 300
        },
        logo: {
            width: '100%',
        },
        desc: {
            fontSize: 18,
            color: '#fff'
        },
        cadastro: {
            fontSize: 18,
            color: '#fff',
            marginTop: 20,
            marginHorizontal: 60,
            textAlign: "center",
        },

        button: {
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 30,
            width: 160,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText: {
            color:  '#8C52FF',
            fontSize: 18
        }
    })
  return (
    <View style={styles.container}>
        <StatusBar style='light' />
        <View style={{ width: 300}}>
            <Image resizeMode='contain' source={Logo} style={styles.logo}/>
        </View>
      <Text style={styles.desc}>Cadastro</Text>
      <TextInput style={styles.input} placeholderTextColor={'#fff'} placeholder='Digite o seu e-mail'/>
      <TextInput secureTextEntry={true} placeholderTextColor={'#fff'} style={styles.input} placeholder='Senha'/>
      <TextInput secureTextEntry={true} placeholderTextColor={'#fff'} style={styles.input} placeholder='Confirme a senha'/>
      <TouchableOpacity>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.cadastro}>Se já estiver cadastrado, entre agora clicando aqui</Text>
      </TouchableOpacity>
    </View>
  )
}