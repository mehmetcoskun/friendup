import { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { ResponseType, useAuthRequest } from 'expo-auth-session';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch } from 'react-redux';
import { setRefreshToken } from '../../store/auth';

import { styles } from './Login.styles';

import { credentials, getFirstTokenData } from '../../utils/spotify';

import * as Icon from '../../components/icons';

export default function Login() {
  const dispatch = useDispatch();

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Code,
      clientId: credentials.clientId,
      scopes: [
        'user-read-private',
        'user-read-email',
        'user-read-currently-playing',
      ],
      usePKCE: false,
      redirectUri: credentials.redirectUri,
    },
    {
      authorizationEndpoint: credentials.spotifyAuthUri,
      tokenEndpoint: credentials.spotifyTokenUri,
    }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      getFirstTokenData(code).then(({ refresh_token }) => {
        AsyncStorage.setItem('refresh_token', refresh_token).then(() => {
          dispatch(setRefreshToken(refresh_token));
        });
      });
    }
  }, [response]);

  return (
    <ImageBackground
      source={require('./background.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Şarkı dinleyerek ruh eşini aramaya ne dersin?
        </Text>

        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => {
            promptAsync();
          }}
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
  );
}
