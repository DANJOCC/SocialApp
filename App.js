import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bouncer from './components/bouncer/Bouncer';
import Login from './components/login/Login';
import Register from './components/register/Register';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Bouncer"
        component={Bouncer}
        options={{title: 'Social React', headerStyle:{ backgroundColor: 'purple'}, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login', headerStyle:{ backgroundColor: 'purple'}, headerTitleAlign: 'center'}}
      />
       <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Sing in', headerStyle:{ backgroundColor: 'purple'}, headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
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
