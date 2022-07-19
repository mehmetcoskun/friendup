import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch } from 'react-redux';
import { setRefreshToken } from '../../store/auth';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.removeItem('auth').then(() => {
            dispatch(setRefreshToken(''));
          });
        }}
      >
        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
