import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, Feather } from '@expo/vector-icons';



import StackRoutes from './stack.routes';
import WelcomeScreen from '../components/welcome';
import DrawerRoutes2 from './drawer.routes.second';

const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='welcome'
    screenOptions={{ title: '', drawerActiveTintColor:"#266f5f", drawerStyle:{backgroundColor:"#95D6Be"},  headerStyle:{ backgroundColor: "#266F5F" }, headerTitleStyle:{ color: "#FFF", fontWeight:"100"}, headerTitleAlign: "center",}}>
      <Drawer.Screen 
      name="home" 
      component={StackRoutes} 
      options={{
        drawerIcon: ({color, size}) => (<Ionicons name="home" size={size} color={color} />),
        drawerLabel: 'Início',
        headerShown: false,
        swipeEnabled: false
      }}
      />
      <Drawer.Screen 
      name="logado" 
      component={DrawerRoutes2} 
      options={{
        drawerIcon: ({color, size}) => (<Feather name="user" size={size} color={color} />),
        drawerLabel: 'Logado',
        headerShown: false,
        swipeEnabled: false
      }}
      />
      <Drawer.Screen 
      name="welcome" 
      component={WelcomeScreen} 
      options={{
        drawerIcon: ({color, size}) => (<Feather name="user" size={size} color={color} />),
        headerShown: false,
        swipeEnabled: false
      }}
      />
    </Drawer.Navigator>
  );
}