/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,TouchableOpacity,
  Image,
  Button
} from 'react-native';

import {
  Header,

  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import  FloatingLabel from 'react-native-floating-labels'

import Login from './src/Component/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './src/Component/Signup'
import Splash from './src/Component/Splash'
import {ShowtimeContextProvider} from './src/Context/Store'
import Movie from './src/Component/Movie'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';
import  Search from   './src/Component/Search' 
import Detail from './src/Component/Detail'
import Tv from './src/Component/Tv'
import L from './src/Component/Listing'
import Trailer from './src/Component/Trailer'
import Setting from './src/Component/Setting'
import Tabviews from  './src/Component/Tabviews'
const App: () => React$Node = () => {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  function MovieStack() {
    return (
      <Stack.Navigator>
     <Stack.Screen name="Movie" component={Movie}  options={{  headerShown: false }} />
     <Stack.Screen name="Listing" component={L}     options={({ route }) => ({ title: route.params.name,headerTitleAlign:'center',headerTransparent: true,  headerTintColor:'white' })} />  
     <Stack.Screen name="Detail" component={Detail}  options={{  headerShown: false }} />
     <Stack.Screen name="Trailer" component={Trailer} options={{ title: '', headerTransparent: true,
        headerTintColor:'white'}} />
    
      </Stack.Navigator>
    );
  }
  function TvStack() {
    return (
      <Stack.Navigator>
     <Stack.Screen name="Tv" component={Tv}  options={{  headerShown: false }} />
       
      </Stack.Navigator>
    );
  }
  function SettingStack() {
    return (
      <Stack.Navigator>
     <Stack.Screen name="Setting" component={Setting}  options={{  headerShown: false }} />
    
      </Stack.Navigator>
    );
  }




function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      
      tabBarOptions={{
      
        keyboardHidesTabBar: true,
        activeTintColor: 'rgb(255,98,56)',
        activeBackgroundColor:'rgb(4,11,17)',
       inactiveBackgroundColor:'rgb(4,11,17)',
        inactiveTintColor:'rgb(255,255,255)',
      
      }}
     
     
     
    >
      <Tab.Screen
        name="Feed"
        component={MovieStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color}) => (
            <Image source={require('./src/assests/moive2.png')} style={{tintColor:color}}/>
            // <MaterialIcons name="local-movies" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={TvStack}
        options={{
          tabBarLabel: 'TV',
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="tv" color={color} size={22} />
          ),
          
        }}
      />
     
     <Tab.Screen
        name="Movie"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="search" color={color} size={22} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={SettingStack}
        options={{
          tabBarLabel: 'My Stuffs',
          tabBarIcon: ({ color}) => (
            <Image source={require('./src/assests/user.png')} style={{tintColor:color}}/>

          ),
        }}
      />
    </Tab.Navigator>
  );
}
  return (
    <>
  <ShowtimeContextProvider>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="M" component={MyTabs}  options={{  headerShown: false }}  />
      <Stack.Screen name="Splash" component={Splash} options={{ title: '', headerTransparent: true,
       headerTintColor:'white'}} />    
    <Stack.Screen name="L" component={Login} options={{  headerShown: false }}  />
    <Stack.Screen name="S" component={Signup} options={{ title: '', headerTransparent: true,
        headerTintColor:'white'}} />
    <Stack.Screen name="Tabviews" component={Tabviews}  options={{  headerShown: false }} />
    
      
      </Stack.Navigator>
    </NavigationContainer>
    </ShowtimeContextProvider>   
    </>
  );
};

export default App