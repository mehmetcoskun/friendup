import { StatusBar } from 'react-native'

import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useFonts } from 'expo-font'

import { Provider } from 'react-redux'

import { store } from './src/store'
import App from './src/App'

export default () => {
  useFonts({
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
    NunitoMedium: require('./assets/fonts/Nunito-Medium.ttf'),
    AlataRegular: require('./assets/fonts/Alata-Regular.ttf'),
  })

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <NavigationContainer theme={DarkTheme}>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
