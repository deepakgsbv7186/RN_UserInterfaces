import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONT} from './assets/fonts/index';
import {COLOR} from './utils/theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Icon name="rocket" size={60} color="#900" />
      <Text style={styles.tileText}>Practice UI Daily</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontFamily: FONT.Lato400,
    fontSize: 20,
    color: COLOR.approved,
  },
});
