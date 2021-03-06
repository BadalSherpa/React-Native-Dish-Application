import React from "react";
import { View, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

/**
 * @author Badal Sherpa aka Changba Master
 * @function Menu
 **/

const Menu = (props) => {
  return (
    <>
      {props.dishes.map((l, i) => (
        <ListItem key={i} onPress={() => props.onPress(l.id)} bottomDivider>
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
