import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./navigations/HomeNavigation";

/**
 * @author   Badal Sherpa
 * @function MainComponent
 **/

const Main = (props) => {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default Main;
