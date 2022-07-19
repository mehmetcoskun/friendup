import { useEffect } from 'react';

// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Redux
import { useSelector } from 'react-redux';

// Views
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Search from './views/Search';
import Chat from './views/Chat';
import Profile from './views/Profile';

// Components
import TabBar from './components/TabBar';
import * as Icon from './components/icons';

export default function App() {
  const { refresh_token } = useSelector((state) => state.auth);

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <>
      {refresh_token ? (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={() => ({
              tabBarIcon: ({ focused }) => <Icon.Home fill={focused ? '#fff' : '#6B6B6B'} />,
            })}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={() => ({
              tabBarIcon: ({ focused }) => <Icon.Search fill={focused ? '#fff' : '#6B6B6B'} />,
            })}
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={() => ({
              tabBarIcon: ({ focused }) => <Icon.Chat fill={focused ? '#fff' : '#6B6B6B'} />,
            })}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={() => ({
              tabBarIcon: ({ focused }) => <Icon.Profile fill={focused ? '#fff' : '#6B6B6B'} />,
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
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </>
  );
}
