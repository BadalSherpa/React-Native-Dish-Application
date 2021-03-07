import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
/**
 * @author
 * @function HomeComponent
 **/

const RenderItem = (props) => {
  const item = props.item;
  if (item != null) {
    return (
      <Card>
        <Card.Title>{item.name}</Card.Title>

        <Text>{item.designation}</Text>

        <Image
          style={{ width: "100%" }}
          source={require("./images/uthappizza.png")}
        />
        <Text>{item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
};
const HomeComponent = (props) => {
  const [dishes, setDishes] = useState(DISHES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);
  const { container } = styles;
  return (
    <ScrollView>
      <RenderItem item={dishes.filter((dish) => dish.featured)[0]} />
      <RenderItem item={promotions.filter((promo) => promo.featured)[0]} />
      <RenderItem item={leaders.filter((leader) => leader.featured)[0]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeComponent;
