import { gql } from '@apollo/client';

export const getUser = gql`
  query getUser($id: ID, $uid: String) {
    getUser(id: $id, uid: $uid) {
      id
      status
      uid
      avatar
      full_name
      email
      gender
      birth_date
      location
      biography
      match_gender
      device_brand
      device_model
      device_os_version
      app_version
      last_active_at
    }
  }
`;

export const register = gql`
  mutation (
    $uid: String!
    $avatar: String!
    $full_name: String!
    $email: String!
    $gender: Gender!
    $birth_date: String!
    $location: String!
    $biography: String!
    $match_gender: Gender!
    $device_brand: String!
    $device_model: String!
    $device_os_version: String!
    $app_version: String!
    $last_active_at: String!
  ) {
    register(
      data: {
        uid: $uid
        avatar: $avatar
        full_name: $full_name
        email: $email
        gender: $gender
        birth_date: $birth_date
        location: $location
        biography: $biography
        match_gender: $match_gender
        device_brand: $device_brand
        device_model: $device_model
        device_os_version: $device_os_version
        app_version: $app_version
        last_active_at: $last_active_at
      }
    ) {
      id
      uid
      avatar
      full_name
      email
      gender
      birth_date
      location
      biography
      match_gender
      device_brand
      device_model
      device_os_version
      app_version
      last_active_at
    }
  }
`;
