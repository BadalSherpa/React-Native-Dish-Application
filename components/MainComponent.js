import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import DishDetail from "./DishDetailComponent";

/**
 * @author   Badal Sherpa
 * @function MainComponent
 **/

const Main = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const { container } = styles;

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <View style={container}>
      <Text>
        <Menu dishes={dishes} onPress={(dishId) => onDishSelect(dishId)} />
      </Text>
      <DishDetail dish={dishes.filter((item) => item.id === selectedDish)[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
});

export default Main;
