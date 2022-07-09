import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const Chat = (props) => (
  <Svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M16.5 2.75c-7.582 0-13.75 4.935-13.75 11 0 3.998 2.61 7.583 6.875 9.534v6.966l7.343-5.507c7.365-.196 13.282-5.053 13.282-10.993 0-6.065-6.168-11-13.75-11Z" />
  </Svg>
)

export default Chat
