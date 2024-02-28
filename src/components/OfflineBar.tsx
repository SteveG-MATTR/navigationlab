import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  useSafeAreaInsets,
  type EdgeInsets,
} from 'react-native-safe-area-context';
type OfflineBarProps = {
  visible: boolean;
};

const OfflineBar = (props: OfflineBarProps): JSX.Element | null => {
  const {visible} = props;
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>OfflineBar</Text>
    </View>
  );
};

const getStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'lightgrey',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: insets.top,
    },
  });

export default OfflineBar;
