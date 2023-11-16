import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from '../components/signUp';
import LoginScreen from '../components/signIn';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
            name='cadastro' 
            component={SignUpScreen} 
            />

            <Stack.Screen 
            name='login' 
            component={LoginScreen} 
            />
        </Stack.Navigator>
  );
}