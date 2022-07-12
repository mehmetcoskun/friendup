import { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

// React Navigation
import { useTheme } from '@react-navigation/native';

// React Native SafeArea
import { SafeAreaView } from 'react-native-safe-area-context';

// Redux
import { useSelector } from 'react-redux';

// Apollo
import { useQuery } from '@apollo/client';
import { user } from '../../queries';

// Styles
import { styles } from './Home.styles';

// Utils
import { getData } from '../../utils/spotify';

export default function Discover() {
  const { colors } = useTheme();

  const { data, loading } = useQuery(user, {
    variables: {
      uid: 'qmx182cyi83s0zkuro0xe994w',
    },
  });

  console.log(data);

  // const [data, setData] = useState();

  // console.log(data)

  const { refreshToken, accessToken } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (accessToken) {
  //     getData(accessToken, 'v1/me')
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [refreshToken, accessToken]);

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
          Mehmet
        </Text>
      </View>
      <ImageBackground
        source={require('./ellipse.png')}
        style={{
          width: 150,
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri: 'https://i.scdn.co/image/ab67616d00001e026d289596a3f666b0a43a6674',
          }}
          style={{ width: 123, height: 126, borderRadius: 100 }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
