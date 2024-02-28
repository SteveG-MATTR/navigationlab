import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationParams} from '../navigation/AppNavigation';

const Home = (): JSX.Element => {
  const navigation = useNavigation();

  const gotoScreen = (name: keyof AppNavigationParams) => () =>
    navigation.navigate(name);

  return (
    <View style={styles.container}>
      <Button title="Show Detail Screen" onPress={gotoScreen('Detail')} />
      <Button
        title="Show DetailNoHeader Screen"
        onPress={gotoScreen('DetailNoHeader')}
      />
      <Button title="Show MyModal" onPress={gotoScreen('MyModal')} />
      <Button title="Show MyOtherModal" onPress={gotoScreen('MyOtherModal')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Home;
