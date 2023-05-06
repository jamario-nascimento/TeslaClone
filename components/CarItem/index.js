import React from "react";
import { View, Text, ImageBackground } from "react-native";

import StyledButton from '../StyledButton'
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>

      <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}></ImageBackground>

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyledButton 
      type="primary" 
      content={"Custon Order"} 
      onPress={() => {
        console.warn(data, "Custon Order was pressed");
      }}
      />

<StyledButton 
      type="secondary" 
      content={"Existing Inverntory"} 
      onPress={() => {
        console.warn(data, "Existing Inverntory was pressed");
      }}
      />

    </View>
  );
};

export default CarItem;