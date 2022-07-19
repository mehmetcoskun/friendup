import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
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
    color: '#fff',
    fontFamily: 'AlataRegular',
  },
  currentPlayingContainer: {
    alignItems: 'center',
    marginTop: 105,
  },
  currentPlayingBackground: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentPlayingImage: {
    width: 133,
    height: 136,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
  },
  currentPlayingPlayIcon: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
  },
});
