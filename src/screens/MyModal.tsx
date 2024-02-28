import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyModal = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>MyModal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyModal;
