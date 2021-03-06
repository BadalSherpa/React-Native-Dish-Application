import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-elements";

/**
 * @author Badal Sherpa aka Changba Master
 * @function Menu
 **/

const RenderDish = (props) => {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card>
        <Card.Title>{dish.name}</Card.Title>
        <View style={{ textAlign: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./images/uthappizza.png")}
          />
        </View>

        <Text
          style={{
            margin: 10,
          }}
        >
          {dish.description}
        </Text>
      </Card>
    );
  } else {
    return null;
  }
};

const DishDetail = (props) => {
  return <RenderDish dish={props.dish} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DishDetail;
