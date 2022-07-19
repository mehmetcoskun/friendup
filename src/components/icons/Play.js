import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

const Play = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Ellipse
      style={{
        fill: '#1a1718',
      }}
      cx={256}
      cy={256}
      rx={256}
      ry={255.832}
    />
    <Path
      style={{
        fill: '#e21b1b',
      }}
      d="M173.328 403.248 416.976 256 173.328 108.752z"
    />
    <Path
      style={{
        fill: '#f91e1e',
      }}
      d="M173.328 256h243.648L173.328 108.752z"
    />
  </Svg>
);

export default Play;
