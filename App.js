import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './components/views/home';
import MapRender from './components/views/openStreetMap';
import LoginForm from './components/views/login';
import SignInForm from './components/views/sign-in';
import Profile from './components/views/profile';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                headerStatusBarHeight: 50,
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitle: 'Ceercles',
                headerRight: () => {
                  return ( 
                    <Image 
                      source={require('./assets/ceercles.png')}
                      style={{width: 60, height: 60, marginBottom: '15%'}}
                    />
                  )
                }
              }}
            >
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Map view" component={MapRender} />
              <Drawer.Screen name="Login" component={LoginForm} />
              <Drawer.Screen name="Sign-in" component={SignInForm} />
              <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
