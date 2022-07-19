import { createContext, useContext, useEffect } from 'react';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Socket IO
import io from 'socket.io-client';

// Apollo
import { useLazyQuery } from '@apollo/client';
import { getUser } from '../queries';

// Redux
import { useDispatch } from 'react-redux';
import { setRefreshToken, setAccessToken } from '../store/auth';
import { setSocketId, setUser } from '../store/user';

// Utils
import { getRefreshTokenData } from '../utils/spotify';

const Store = createContext();

const useMyContext = () => useContext(Store);

const ContextProvider = ({ children }) => {
  const socket = io('http://192.168.1.109:4000');

  const dispatch = useDispatch();

  const [getUserData] = useLazyQuery(getUser);

  useEffect(() => {
    AsyncStorage.getItem('auth').then((auth) => {
      if (auth) {
        const { id, refresh_token } = JSON.parse(auth);

        dispatch(setRefreshToken(refresh_token));

        getUserData({ variables: { id } }).then(({ data }) => {
          socket.emit('join', data.getUser.id);
          dispatch(setUser(data.getUser));
        });

        getRefreshTokenData(refresh_token).then(({ access_token }) => {
          dispatch(setAccessToken(access_token));
        });
      }
    });
  }, []);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      dispatch(setSocketId(socket.id));
    });

    socket.on('onlineUserCount', (data) => {
      console.log('Online User Count: ', data);
    });

    socket.on('something', (data) => {
      console.log('Something: ', data);
    });
  }, []);

  const data = {
    socket,
  };

  return <Store.Provider value={data}>{children}</Store.Provider>;
};

export { ContextProvider, useMyContext };
