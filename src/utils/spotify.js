// Axios
import axios from 'axios';

// Buffer
import { Buffer } from 'buffer';

export const credentials = {
  clientId: '',
  clientSecret: '',
  redirectUri: 'friendup://callback',
  spotifyAuthUri: 'https://accounts.spotify.com/authorize',
  spotifyTokenUri: 'https://accounts.spotify.com/api/token',
  spotifyApiUri: 'https://api.spotify.com',
};

export const getFirstTokenData = async (code) => {
  var dataToSend = {
    code: code,
    redirect_uri: credentials.redirectUri,
    grant_type: 'authorization_code',
  };
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  const response = await axios.post(credentials.spotifyTokenUri, formBody, {
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(
          credentials.clientId + ':' + credentials.clientSecret
        ).toString('base64'),
    },
  });

  return response.data;
};

export const getRefreshTokenData = async (refreshToken) => {
  var dataToSend = {
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  };
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  const response = await axios.post(credentials.spotifyTokenUri, formBody, {
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(
          credentials.clientId + ':' + credentials.clientSecret
        ).toString('base64'),
    },
  });

  return response.data;
};

export const getData = async (token, url) => {
  const response = await axios(`${credentials.spotifyApiUri}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

  return {
    status: response.status,
    data: response.data,
  };
};
