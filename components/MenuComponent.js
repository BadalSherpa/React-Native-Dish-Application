import React from "react";
import { View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

/**
 * @author Badal Sherpa aka Changba Master
 * @function Menu
 **/

const Menu = (props) => {
  return (
    <View>
      {props.dishes.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar rounded source={require("./images/uthappizza.png")} />
          {console.log(l.image)}
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default Menu;
