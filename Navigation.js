import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";




// Screens
import Home from "./Screens/Home";
import Genero from "./Screens/Genero";
import Edad from "./Screens/Edad";
import Universidades from "./Screens/Universidades";
import Clima from "./Screens/Clima";
import WordPress from "./Screens/WordPress";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Icon name="toolbox" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Determinar genero de un nombre"
          component={Genero}
          options={{
            title: "Genero",
            tabBarIcon: ({ color, size }) => (
              <Icon2 
                  name="gender-male-female" 
                  color={color} 
                  size={size} 
                />
            ),

          }}
        />
        <Tab.Screen
          name="Determinar edad de un nombre"
          component={Edad}
          options={{
            title: "Edad",
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="face-recognition" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Universidades"
          component={Universidades}
          options={{
            title: "Universidades",
            tabBarIcon: ({ color, size }) => (
              <Icon3 name="institution" color={color} size={size} />
              
              ),

          }}
        />
        <Tab.Screen
          name="Clima"
          component={Clima}
          options={{
            title: "Clima",
            tabBarIcon: ({ color, size }) => (
              <Icon name="temperature-high" color={color} size={size} />
            ),
            headerShown: false,

          }}
        />
        <Tab.Screen
          name="WordPress"
          component={WordPress}
          options={{
            title: "WordPress",
            tabBarIcon: ({ color, size }) => (
              <Icon name="wordpress" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
