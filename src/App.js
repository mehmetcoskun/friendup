import { useEffect, useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useSelector } from 'react-redux'

import Splash from './views/Splash'
import Login from './views/Login'
import Discover from './views/Discover'
import Search from './views/Search'
import Chat from './views/Chat'
import Profile from './views/Profile'

import TabBar from './components/TabBar'
import * as Icon from './components/icons'

export default function App({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)

  const uid = useSelector((state) => state.user.uid)

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Splash />
  }

  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()

  return (
    <>
      {uid ? (
        <Tab.Navigator
          tabBar={(props) => <TabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen
            name="Discover"
            component={Discover}
            options={() => ({
              tabBarIcon: ({ focused }) => (
                <Icon.Discover fill={focused ? '#fff' : '#6B6B6B'} />
              ),
            })}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={() => ({
              tabBarIcon: ({ focused }) => (
                <Icon.Search fill={focused ? '#fff' : '#6B6B6B'} />
              ),
            })}
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={() => ({
              tabBarIcon: ({ focused }) => (
                <Icon.Chat fill={focused ? '#fff' : '#6B6B6B'} />
              ),
            })}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={() => ({
              tabBarIcon: ({ focused }) => (
                <Icon.Profile fill={focused ? '#fff' : '#6B6B6B'} />
              ),
            })}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </>
  )
}
