import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Logo from '../../../assets/logo_white.png'

export default function Signup({ navigation}) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#8C52FF',
            flex: 1,
            margin: 0,
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 80
        },
        input: {
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderColor: '#fff',
            borderRadius: 20,
            borderWidth: 2,
            marginVertical: 15,
            color: '#fff',
            width: '70%',
            maxWidth: 450
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
    <ScrollView style={{ backgroundColor: '#8C52FF'}}>     
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={{ width: 300}}>
                <Image resizeMode='contain' source={Logo} style={styles.logo}/>
            </View>
        <Text style={styles.desc}>Cadastro</Text>
        <TextInput style={styles.input} placeholderTextColor={'#fff'} placeholder='Digite o seu e-mail'/>
        <TextInput secureTextEntry={true} placeholderTextColor={'#fff'} style={styles.input} placeholder='Senha'/>
        <TextInput secureTextEntry={true} placeholderTextColor={'#fff'} style={styles.input} placeholder='Confirme a senha'/>
        <TouchableOpacity onPress={()=> navigation.navigate('About')}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.cadastro}>Se já estiver cadastrado, entre agora clicando aqui</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  )
}