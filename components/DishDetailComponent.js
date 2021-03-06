import React, { useState } from "react";
import { View, Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";

/**
 * @author Badal Sherpa aka Changba Master
 * @function Menu
 **/

const RenderDish = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const { dish } = props;

  const clicked = dishes.filter(function (item) {
    return item.id == dish;
  });
  if (dish != null) {
    return clicked.map((item) => (
      <Card>
        <Card.Title>{item.name}</Card.Title>
        <View style={{ textAlign: "center" }}>
          <Image
            style={{ width: "100%" }}
            source={require("./images/uthappizza.png")}
          />
        </View>

        <Text
          style={{
            margin: 10,
          }}
        >
          {item.description}
        </Text>
      </Card>
    ));
  } else {
    return <View></View>;
  }
};

const DishDetail = ({ route }) => {
  const { dishId } = route.params;
  return <RenderDish dish={dishId} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DishDetail;
