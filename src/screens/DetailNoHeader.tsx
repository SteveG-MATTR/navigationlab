import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DetailNoHeader = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>DetailNoHeader</Text>
      <Button title="Go Back" onPress={navigation.goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'turquoise',
  },
});

export default DetailNoHeader;
