import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomePage'
import MiPerfil from '../screens/MiPerfil'
import CrearPosteo from '../screens/CrearPosteo'

const Tab = createBottomTabNavigator();

function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>

      <Tab.Screen
        name="Home"
        component={HomePage}
      />

      <Tab.Screen
        name="NuevoPosteo"
        component={CrearPosteo}
      />

      <Tab.Screen
        name="Profile"
        component={MiPerfil}
      />

    </Tab.Navigator>
  );
}
export default NavigationTab;