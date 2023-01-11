import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import MapRender from './components/views/openStreetMap';
import LoginForm from './components/views/login';
import SignInForm from './components/views/sign-in';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                headerStatusBarHeight: 30,
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitle: 'Ceercles',
                headerRight: () => {
                  return ( 
                    <Image 
                      source={require('./assets/ceercles.png')}
                      style={{width: 70, height: 70, marginBottom: '20%'}}
                    />
                  )
                }
              }}
            >
              <Drawer.Screen name="Map view" component={MapRender} />
              <Drawer.Screen name="Login" component={LoginForm} />
              <Drawer.Screen name="Sign-in" component={SignInForm} />
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
