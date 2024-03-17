import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONT} from '../../assets/fonts';
import {COLOR} from '../../utils/theme/colors';

export default function RegisterForm() {
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
    rowGap: 20,
  },
  tileText: {
    fontFamily: FONT.Lato400,
    fontSize: 20,
    color: COLOR.approved,
  },
});
