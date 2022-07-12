import { gql } from '@apollo/client';

export const user = gql`
  query user($uid: String!) {
    user(uid: $uid) {
      uid
      avatar
      full_name
      email
      gender
      birth_date
      location
      biography
      device_brand
      device_model
      device_os_version
      app_version
      last_active_at
    }
  }
`;
