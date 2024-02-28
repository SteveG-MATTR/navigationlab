/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import DetailNoHeader from '../screens/DetailNoHeader';
import MyModal from '../screens/MyModal';
import MyOtherModal from '../screens/MyOtherModal';
import OfflineBar from '../components/OfflineBar';

export type AppNavigationParams = {
  Home: undefined;
  Detail: undefined;
  DetailNoHeader: undefined;
  MyModal: undefined;
  MyOtherModal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigationParams {}
  }
}

const Stack = createStackNavigator<AppNavigationParams>();

const AppNavigation = () => (
  <>
    <OfflineBar visible={true} />
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen
        name="DetailNoHeader"
        component={DetailNoHeader}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyModal"
        component={MyModal}
        options={({navigation}) => ({
          presentation: 'modal',
          headerLeft: () => <Button title="X" onPress={navigation.goBack} />,
        })}
      />
      <Stack.Screen
        name="MyOtherModal"
        component={MyOtherModal}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </>
);

export default AppNavigation;
