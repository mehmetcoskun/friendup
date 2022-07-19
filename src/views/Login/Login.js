import { useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

// LinearGradient
import { LinearGradient } from 'expo-linear-gradient';

// AuthSession
import { ResponseType, useAuthRequest } from 'expo-auth-session';

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Apollo
import { useLazyQuery } from '@apollo/client';
import { getUser } from '../../queries';

// Redux
import { useDispatch } from 'react-redux';
import { setRefreshToken } from '../../store/auth';

// Styles
import { styles } from './Login.styles';

// Utils
import { credentials, getFirstTokenData, getRefreshTokenData, getData } from '../../utils/spotify';

// Components
import * as Icon from '../../components/icons';

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [getUserData] = useLazyQuery(getUser);

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Code,
      clientId: credentials.clientId,
      scopes: ['user-read-private', 'user-read-email', 'user-read-currently-playing'],
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
        getRefreshTokenData(refresh_token).then(({ access_token }) => {
          getData(access_token, '/v1/me').then(({ data: { id } }) => {
            getUserData({ variables: { uid: id } }).then(async ({ data }) => {
              if (data.getUser) {
                AsyncStorage.setItem('auth', JSON.stringify({ id: data.getUser.id, refresh_token })).then(() => {
                  dispatch(setRefreshToken(refresh_token));
                });
              } else {
                navigation.navigate('Register');
              }
            });
          });
        });
      });
    }
  }, [response]);

  return (
    <ImageBackground source={require('./background.jpg')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.text}>Şarkı dinleyerek ruh eşini aramaya ne dersin?</Text>

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
