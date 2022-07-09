import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const Profile = (props) => (
  <Svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M10.313 8.938a6.195 6.195 0 0 0 6.187 6.187 6.195 6.195 0 0 0 6.188-6.188A6.195 6.195 0 0 0 16.5 2.75a6.195 6.195 0 0 0-6.188 6.188ZM27.5 28.875h1.375V27.5c0-5.306-4.319-9.625-9.625-9.625h-5.5c-5.307 0-9.625 4.319-9.625 9.625v1.375H27.5Z" />
  </Svg>
)

export default Profile
