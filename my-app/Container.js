import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import { theme, useTheme } from "native-base";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();




// Import Screen
import Calculator from './src/screens/Calculator'
import Home from "./src/screens/Home";
import Contact from "./src/screens/Contact";
import ContactDetail from "./src/screens/ConctactDetail";
import AddContact from "./src/screens/AddContact";
import UpdateContact from "./src/screens/UpdateContact";



const Stack = createStackNavigator()

// const Tab = createBottomTabNavigator()



function MyTab() {
  const theme = useTheme();

  return(
    <Tab.Navigator
      initialRouteName="Home"
      
      screenOptions={({route}) => ({

        
        // headerShown: false,
        
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if(route.name === "Home") {
        //     iconName = focused ? "ios-home" : "ios-home-outline"
        //   } else if(route.name === "Calculator") {
        //     iconName = focused ? "ios-calculator" : "ios-calculator-outline" 
        //   }
         
        //   return <Ionicons name={iconName} size={size} color={color} />
        // },
        
        tabBarActiveTintColor: "#065f46",
        tabBarInactiveTintColor: "gray",

        
        
        
        tabBarStyle: {
          height: 50,
          backgroundColor: "#000000",
          
      },
        
      })}
    >

      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Calculator" component={Calculator}  />
      <Tab.Screen name="Contact" component={Contact}  />
      
      
 


    </Tab.Navigator>
  )

}


export default function Container() {
  return(
    <NavigationContainer>

       <Stack.Navigator
          screenOptions={{
            headerStyle: {
              height: 60,
              backgroundColor: '#000000',
            },
            headerTintColor: "#065f46",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
       
       
          <Stack.Screen 
            name="MyApp " 
            component={MyTab} 
            options={{
              title: "MyApp"
              // headerShown : false
            }}
          />
          <Stack.Screen 
            name="Contact Detail" 
            component={ContactDetail} 
            options={{
              title: "Contact Detail"
              // headerShown : false
            }}
          />
          <Stack.Screen 
            name="Add Contact" 
            component={AddContact} 
            options={{
              title: "Add Contact"
              // headerShown : false
            }}
          />
          <Stack.Screen 
            name="Update Contact" 
            component={UpdateContact} 
            options={{
              title: "Update Contact"
              // headerShown : false
            }}
          />

           


          {/* <Stack.Screen name="Home " component={Home} /> */}
          {/* <Stack.Screen name="Calculator " component={Calculator} /> */}

      </Stack.Navigator>

    </NavigationContainer>
   
  )

}   