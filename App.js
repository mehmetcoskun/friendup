import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

// React Navigation
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

// React Native SafeArea
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Expo
import { useFonts } from 'expo-font';

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Redux
import { Provider } from 'react-redux';
import { store } from './src/store';

import { ContextProvider } from './src/context';

// Views
import App from './src/App';
import Splash from './src/views/Splash';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default () => {
  const [loading, setLoading] = useState(true);

  useFonts({
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
    NunitoMedium: require('./assets/fonts/Nunito-Medium.ttf'),
    NunitoSemiBold: require('./assets/fonts/Nunito-SemiBold.ttf'),
    AlataRegular: require('./assets/fonts/Alata-Regular.ttf'),
  });

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const Friendup = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#111519',
      primary: '#E21735',
      secondary: '#A3A3A3',
      tertiary: '#4F4F4F',
    },
  };

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ContextProvider>
          <SafeAreaProvider>
            <StatusBar barStyle="light-content" />
            <NavigationContainer theme={Friendup}>{loading ? <Splash /> : <App />}</NavigationContainer>
          </SafeAreaProvider>
        </ContextProvider>
      </Provider>
    </ApolloProvider>
  );
};
