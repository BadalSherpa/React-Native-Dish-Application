import React, { useState } from "react";
import { ListItem, Avatar } from "react-native-elements";
import { DISHES } from "../shared/dishes";

/**
 * @author Badal Sherpa aka Changba Master
 * @function Menu
 **/

const Menu = ({ navigation }) => {
  const [dishes, setDishes] = useState(DISHES);
  return (
    <>
      {dishes.map((l, i) => (
        <ListItem
          key={i}
          onPress={() => navigation.navigate("Dish-Detail", { dishId: l.id })} //passing dishId parameter
          bottomDivider
        >
          <Avatar rounded source={require("./images/uthappizza.png")} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </>
  );
};

export default Menu;
