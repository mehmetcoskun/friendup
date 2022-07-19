import { useEffect, useState, useRef } from 'react';
import { View, Text, Image, ImageBackground, Animated, TouchableOpacity } from 'react-native';

// React Navigation
import { useTheme } from '@react-navigation/native';

// React Native SafeArea
import { SafeAreaView } from 'react-native-safe-area-context';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer } from '../../store/user';

// Context
import { useMyContext } from '../../context';

// Styles
import { styles } from './Home.styles';

// Utils
import { getData } from '../../utils/spotify';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const { colors } = useTheme();
  const animate = useRef(new Animated.Value(1));

  const dispatch = useDispatch();

  const { socket } = useMyContext();

  const { access_token } = useSelector((state) => state.auth);
  const { socketId, user, player } = useSelector((state) => state.user);

  useEffect(() => {
    if (isPlaying) {
      getData(access_token, '/v1/me/player/currently-playing').then((res) => {
        if (res.status === 200) {
          dispatch(setPlayer(res.data));
          socket.emit('player', { socketId, player: res.data });
        } else {
          dispatch(setPlayer({}));
          socket.emit('player', { socketId, player: {} });
        }
      });
    } else {
      dispatch(setPlayer({}));
      socket.emit('player', { socketId, player: {} });
    }
  }, [isPlaying]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animate.current, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(animate.current, {
          toValue: 0.9,
          duration: 550,
          useNativeDriver: false,
        }),
        Animated.timing(animate.current, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.primary }]}>Eşleş</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.welcomeTextContainer}>
          <Text style={[styles.welcomeText, { fontSize: 20 }]}>
            {new Date().getHours() < 12 ? 'Günaydın!' : new Date().getHours() < 18 ? 'Tünaydın!' : 'İyi Akşamlar!'}
          </Text>
          <Text style={[styles.welcomeText, { fontSize: 36 }]}>{user.full_name}</Text>
        </View>
        <View style={styles.currentPlayingContainer}>
          <TouchableOpacity onPress={() => setIsPlaying((state) => !state)}>
            <ImageBackground source={require('./ellipse.png')} style={styles.currentPlayingBackground}>
              <Animated.Image
                source={Object.keys(player).length !== 0 ? { uri: player?.item?.album?.images[0].url } : require('./play-icon.png')}
                style={[styles.currentPlayingImage, { transform: [{ scale: animate.current }] }]}
              />
            </ImageBackground>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'NunitoBold',
                fontSize: 24,
              }}
            >
              {player?.item?.name}
            </Text>
            <Text
              style={{
                color: colors.secondary,
                fontFamily: 'NunitoSemiBold',
                fontSize: 20,
              }}
            >
              {player?.item?.artists[0]?.name}
            </Text>
          </View>
        </View>
        <Image source={require('./spotify-tag.png')} style={{ width: 157, height: 157, marginTop: 40 }} />
      </View>
    </SafeAreaView>
  );
}
