import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuComponent from "../MenuComponent";
import DishDetailComponent from "../DishDetailComponent";
import HomeComponent from "../HomeComponent";

/**
 * @author
 * @function HomeNavigation
 **/

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeComponent} />
      <Stack.Screen name='Menu' component={MenuComponent} />
      <Stack.Screen name='Dish-Detail' component={DishDetailComponent} />
    </Stack.Navigator>
  );
};

const MenuNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Menu' component={MenuComponent} />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeNavigation} />
      <Drawer.Screen name='Menu' component={MenuNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
