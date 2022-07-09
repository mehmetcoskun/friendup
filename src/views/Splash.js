import React from 'react'

import { View, StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import * as Icon from '../components/icons'

export default function Splash() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(226,23,53)', 'rgb(255,0,38)']}
        style={styles.background}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
      <Icon.Logo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})
