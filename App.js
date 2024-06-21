//React native navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import Homescreen from "./src/Screens/Pos";
import Ordersscreen from "./src/Screens/Orders";
import Loginscreen from "./src/Screens/Login";
import { StatusBar } from "react-native";
import { useLayoutEffect } from "react";

//Redux functions
import Providers from "./src/redux/providers/Providers";


const Stack = createStackNavigator();



export default function App() {

  
  useLayoutEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  return (
    <NavigationContainer>
    <Providers>
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen  name="Login" component={Loginscreen} />

    <Stack.Screen  name="Home" component={Homescreen} />
    <Stack.Screen name="Orders" component={Ordersscreen} />
    </Stack.Navigator>

    </Providers>
    </NavigationContainer>
  );
 
}
