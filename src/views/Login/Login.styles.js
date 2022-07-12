import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 27,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    lineHeight: 29,
    position: 'absolute',
    top: 200,
  },
  loginButtonContainer: {
    width: 335,
    position: 'absolute',
    bottom: 150,
  },
  loginButtonBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loginButtonLabel: {
    color: '#fff',
    fontFamily: 'NunitoBold',
    fontWeight: 'bold',
    fontSize: 23,
  },
  footerContainer: {
    width: '100%',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
