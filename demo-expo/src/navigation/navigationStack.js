import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Registro from '../screens/Registro';
import NavigationTab from './navigationTab';

const Stack = createNativeStackNavigator();


function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NavigationTab"
          component={NavigationTab}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;