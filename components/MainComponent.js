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
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: Platform.OS == "ios" ? 0 : StatusBar.currentHeight,
//   },
// });

export default Main;
