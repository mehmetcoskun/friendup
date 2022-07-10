import { useEffect, useState } from 'react'

import { StatusBar } from 'react-native'

import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useFonts } from 'expo-font'

import { Provider } from 'react-redux'

import { store } from './src/store'
import App from './src/App'

import Splash from './src/views/Splash'

export default () => {
  const [isLoading, setIsLoading] = useState(true)

  useFonts({
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
    NunitoMedium: require('./assets/fonts/Nunito-Medium.ttf'),
    AlataRegular: require('./assets/fonts/Alata-Regular.ttf'),
  })

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Splash />
  }

  const Friendup = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      white: '#FFFFFF',
      primary: '#E21735',
      secondary: '#A3A3A3',
      tertiary: '#4F4F4F',
    },
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <NavigationContainer theme={Friendup}>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
