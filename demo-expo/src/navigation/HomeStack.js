import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/HomePage";
import ComentarPosteo from "../screens/ComentarPosteo";

const Stack = createNativeStackNavigator(); 

function HomeStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomePage"
                component={HomePage}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="ComentarPosteo"
                component={ComentarPosteo}
            />
        </Stack.Navigator>
    )
}

export default HomeStack