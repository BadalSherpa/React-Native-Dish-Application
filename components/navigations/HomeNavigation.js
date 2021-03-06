import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuComponent from "../MenuComponent";
import DishDetailComponent from "../DishDetailComponent";

/**
 * @author
 * @function HomeNavigation
 **/

const Stack = createStackNavigator();

const HomeNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen name='Menu' component={MenuComponent} />
      <Stack.Screen name='DishDetail' component={DishDetailComponent} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
