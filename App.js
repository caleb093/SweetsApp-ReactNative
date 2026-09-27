import 'react-native-gesture-handler'
import { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailsScreen from './screens/DetailsScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import HomeScreen from './screens/HomeSreen';
import CheckoutScreen from './screens/CheckoutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements'
import DetailsHeader from './components/DetailsHeader';
import HomeHeader from './components/HomeHeader'
import CustomDrawerComponent from './components/CustomDrawerComponent';


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    // overshootClamping: true,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'  drawerContent={(props) => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen 
        name='Home'
        component={HomeScreen}
        options={{
          // headerShown: false,
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name);

            return <HomeHeader title={title} navigation={navigation} style={options.headerStyle} />
          },
          drawerActiveTintColor:"blue",
          drawerInactiveTintColor:"white"
        }}
      />
      <Drawer.Screen 
        name='Checkout'
        component={CheckoutScreen}
      />
    </Drawer.Navigator>
  )
}
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='/'
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open:config,
          close:config
        },
        animation:'slide_from_bottom'
      }}
    >
      <Stack.Screen 
        name='/'
        component={DrawerStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name='Details'
        component={DetailsScreen}
        options={{
          // title: 'Test',
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name);

            return <DetailsHeader title={title} navigation={navigation} style={options.headerStyle} />
          },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}

      />
      <Stack.Screen 
        name='Checkout'
        component={CheckoutScreen}
      />
    </Stack.Navigator>
  )
}

export default function App() {

  const [showSplash, setShowSplash] = useState(true)

  if(showSplash) {
    return (
      <View style={{flex: 1, margin: 0, padding: 0}}>
        <StatusBar style='auto'/>
        <GetStartedScreen setShowSplash={setShowSplash}/>
      </View>
    )
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </>
          // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   <StatusBar style="auto" />
    //   <GetStartedScreen />
    //   <DetailsScreen />
    //   <HomeScreen />
    // </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
