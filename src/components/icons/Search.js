import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const Search = (props) => (
  <Svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m25.68 26.96-7.857-7.86a8.25 8.25 0 1 1-5.125-14.969 8.25 8.25 0 0 1 7.07 13.023l7.858 7.86-1.944 1.944-.001.002ZM13.043 6.875a5.5 5.5 0 1 0 4.01 1.738l.833.825-.938-.935-.017-.016a5.462 5.462 0 0 0-3.888-1.612Z" />
  </Svg>
)

export default Search
