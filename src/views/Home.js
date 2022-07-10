import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useSelector } from 'react-redux'

import { useTheme } from '@react-navigation/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export default function Discover() {
  const { colors } = useTheme()

  const { full_name } = useSelector((state) => state.user)

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.primary }]}>
          Eşleş
        </Text>
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text
          style={[styles.welcomeText, { fontSize: 20, color: colors.white }]}
        >
          {new Date().getHours() < 12
            ? 'Günaydın!'
            : new Date().getHours() < 18
            ? 'Tünaydın!'
            : 'İyi Akşamlar!'}
        </Text>
        <Text
          style={[styles.welcomeText, { fontSize: 36, color: colors.white }]}
        >
          {full_name}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 30,
  },
  headerTitle: {
    fontFamily: 'NunitoBold',
    fontWeight: 'bold',
    fontSize: 30,
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginTop: 26,
  },
  welcomeText: {
    fontFamily: 'AlataRegular',
  },
})
