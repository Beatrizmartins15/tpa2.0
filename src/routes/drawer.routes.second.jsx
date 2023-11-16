import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import FeedersList from '../components/screenLoged/feederList/feed';

const Drawer = createDrawerNavigator();


export default function DrawerRoutes2() {
  return (
    <Drawer.Navigator initialRouteName='welcome'
    screenOptions={{ title: '', drawerActiveTintColor:"#266f5f", drawerStyle:{backgroundColor:"#95D6Be"},  headerStyle:{ backgroundColor: "#266F5F" }, headerTitleStyle:{ color: "#FFF", fontWeight:"100"}, headerTitleAlign: "center",}}>
      <Drawer.Screen 
      name="feed" 
      component={FeedersList} 
      options={{
        drawerIcon: ({color, size}) => (<MaterialIcons name="pets" size={size} color={color} />),
        drawerLabel: 'Comedouros',

      }}
      />
      <Drawer.Screen 
      name="home" 
      component={Home} 
      options={{
        drawerIcon: ({color, size}) => (<MaterialIcons name="home" size={size} color={color} />),
        drawerLabel: 'Início',
      }}
      />
    </Drawer.Navigator>
  );
}