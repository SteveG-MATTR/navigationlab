import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  useSafeAreaInsets,
  type EdgeInsets,
} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const MyOtherModal = (): JSX.Element => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View style={styles.container}>
      <Text>MyOtherModal</Text>
      <Button title="Go Back" onPress={navigation.goBack} />
    </View>
  );
};

const getStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'hotpink',
      marginHorizontal: 20,
      borderRadius: 10,
      marginTop: insets.top,
      marginBottom: insets.bottom,
    },
  });

export default MyOtherModal;
