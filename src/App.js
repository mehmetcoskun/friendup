import { useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useSelector, useDispatch } from 'react-redux'
import {
  setUserId,
  setUserAvatar,
  setUserFullName,
  setUserEmail,
  setUserGender,
  setUserBirthDate,
  setUserLocation,
  setUserBiography,
} from './store/user'

import Login from './views/Login'
import Home from './views/Home'
import Search from './views/Search'
import Chat from './views/Chat'
import Profile from './views/Profile'

import TabBar from './components/TabBar'
import * as Icon from './components/icons'

export default function App({ navigation }) {
  const uid = useSelector((state) => state.user.uid)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserId('1'))
    dispatch(setUserAvatar('https://i.pravatar.cc/300'))
    dispatch(setUserFullName('Mehmet'))
    dispatch(setUserEmail('tekiner65@hotmail.com'))
    dispatch(setUserGender('male'))
    dispatch(setUserBirthDate('21.06.2002'))
    dispatch(setUserLocation('Antalya'))
    dispatch(setUserBiography('Lorem ipsum dolor sit amet'))
  }, [])

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
            name="Home"
            component={Home}
            options={() => ({
              tabBarIcon: ({ focused }) => (
                <Icon.Home fill={focused ? '#fff' : '#6B6B6B'} />
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
