import { View } from 'react-native';

// LinearGradient
import { LinearGradient } from 'expo-linear-gradient';

// Styles
import { styles } from './Splash.styles';

// Components
import * as Icon from '../../components/icons';

export default function Splash() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgb(226,23,53)', 'rgb(255,0,38)']} style={styles.background} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} />
      <Icon.Logo />
    </View>
  );
}
