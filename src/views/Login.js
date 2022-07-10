import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { useDispatch } from 'react-redux'
import { setUserUid } from '../store/user'

import * as Icon from '../components/icons'

export default function Login() {
  const dispatch = useDispatch()
  return (
    <ImageBackground
      source={require('../../assets/login-background.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Şarkı dinleyerek ruh eşini aramaya ne dersin?
        </Text>

        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => dispatch(setUserUid('123'))}
        >
          <LinearGradient
            colors={['rgb(29,185,84)', 'rgb(13,130,55)']}
            style={styles.loginButtonBackground}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          />
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonLabel}>Spotify ile Giriş Yap</Text>
            <Icon.Spotify />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Icon.LogoFooter />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 27,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    lineHeight: 29,
    position: 'absolute',
    top: 200,
  },
  loginButtonContainer: {
    width: 335,
    position: 'absolute',
    bottom: 150,
  },
  loginButtonBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loginButtonLabel: {
    color: '#fff',
    fontFamily: 'NunitoBold',
    fontWeight: 'bold',
    fontSize: 23,
  },
  footerContainer: {
    width: '100%',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
})
