import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeStack from "./HomeStack";
import MiPerfil from '../screens/MiPerfil';
import CrearPosteo from '../screens/CrearPosteo';

const Tab = createBottomTabNavigator();

function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>

      <Tab.Screen
        name="Home"
        component={HomeStack}
        options = {{ tabBarIcon: () => <FontAwesome name="home" size={24} color="#4b2e83" /> }}
      />

      <Tab.Screen
        name="NuevoPosteo"
        component={CrearPosteo}
        options={{ tabBarIcon: () => <FontAwesome name="plus-circle" size={24} color="#4b2e83" /> }}
      />

      <Tab.Screen
        name="Profile"
        component={MiPerfil}
        options={{ tabBarIcon: () => <FontAwesome name="user" size={24} color="#4b2e83" /> }}
      />

    </Tab.Navigator>
  );
}
export default NavigationTab;