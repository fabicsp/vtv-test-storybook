import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Decorator from './../../../decorators/Decorator';
import {storiesOf} from '@storybook/react-native';

const Portrait = ({style}) => {
  return (
    <View>
      <View style={[styles.card, style]}>
        <Text style={{ color: "red" }}>Hello world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 12 * 18,
    height: 12 * 27,
    backgroundColor: "lightgrey"
  }
});

export const asset = {
  id: 1,
  title: "Portrait Title",
  poster: {
    uri:
      "https://firebasestorage.googleapis.com/v0/b/vftv-71ef4.appspot.com/o/movies%2FMulan-Poster-2020.jpg?alt=media&token=369bb67e-babe-45ca-83df-c0e5381dcccd"
  },
  badging: {
    label: "Aired 22:00 Fri 23 Mar",
    icon: "play circle"
  },
  progress: 64
};

storiesOf("cards/portrait", module)
  .addDecorator(story => <Decorator>{story()}</Decorator>)
  .add("rest", () => (
    <Portrait
      asset={{ ...asset, badging: null, progress: null }}
      focus={false}
    />
  ))
  .add("focus", () => (
    <Portrait asset={{ ...asset, badging: null, progress: null }} focus />
  ))
  .add("progress", () => <Portrait asset={{ ...asset, badging: null }} />)
  .add("focus and progress", () => (
    <Portrait asset={{ ...asset, badging: null }} focus />
  ))
  .add("loading", () => <Portrait asset={asset} loading />)
  .add("badging", () => <Portrait asset={asset} />)
  .add("badging and focus", () => <Portrait asset={asset} focus />);


//   import * as React from "react";
// import { View, Text } from "react-native";
// import Decorator from "./../../../decorators/Decorator";
// import { storiesOf } from "@storybook/react-native";

// storiesOf("cards/portrait", module)
//   .addDecorator(story => <Decorator>{story()}</Decorator>)
//   .add("rest", () => (
//     <View>
//       <Text style={{ color: "red", fontSize: 54 }}>
//         Hello world
//       </Text>
//     </View>
//   ))
//   .add("focus", () => (
//     <View>
//       <Text style={{ color: "red", fontSize: 54 }}>
//         Hello focus
//       </Text>
//     </View>
//   ))
//   .add("progress", () => <View><Text style={{ color: "red", fontSize: 54 }}>Progress</Text></View>)
//   .add("focus and progress", () => (
//     <View><Text style={{ color: "red", fontSize: 54 }}>focus and Progress</Text></View>
//   ))
//   .add("loading", () => <View><Text style={{ color: "red", fontSize: 54 }}>Loading</Text></View>)
//   .add("badging", () => <View><Text style={{ color: "red", fontSize: 54 }}>badging</Text></View>)
//   .add("badging and focus", () => <View><Text style={{ color: "red", fontSize: 54 }}>badging and focus</Text></View>);
