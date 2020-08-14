import React from 'react';
import {View, StyleSheet} from 'react-native';

const Decorator = ({style, children}) => {
  return (
    <View style={[styles.container, overrides.container, style]}>
      {children}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    width: '100%',
  },
  template: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
  },
  backdropTest: {
    flex: 1,
    backgroundColor: '#FFF',
    width: 1920,
    height: 1080,
  },
  flex: {
    flex: 1,
  },
});

const overrides = StyleSheet.create({
  container: {
    paddingTop: 12 * 6,
    paddingLeft: 12 * 6,
    paddingRight: 12 * 6,
  },
});

export default Decorator;
