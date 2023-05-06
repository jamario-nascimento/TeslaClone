import React from "react";
import { View, Text, ImageBackground } from "react-native";

import StyledButton from '../StyledButton'
import styles from "./styles";

const CarItem = (props) => {

  const { name, tagLine, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>

      <ImageBackground source={image} style={styles.image}></ImageBackground>

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagLine}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>

      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custon Order"}
          onPress={() => {
            console.warn("Custon Order was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inverntory"}
          onPress={() => {
            console.warn("Existing Inverntory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;