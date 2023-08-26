import { useState } from 'react';
import { StyleSheet, Pressable, ToastAndroid } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import ButtonsRight from './ButtonsRight';
import PasswordContentLeft from './PasswordContentLeft';

function PasswordListItem({ website, password }) {
  const [isActive, setIsActive] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setStringAsync(password);
    ToastAndroid.showWithGravity(
      `Password for ${website} copied to clipboard!`,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    )
  }

  return (
    <Pressable
      activeOpacity={0.9}
      style={isActive ? { ...styles.container, elevation: 1 } : styles.container}
      onPress={() => setIsActive((state) => !state)}
      onLongPress={copyToClipboard}
      delayLongPress={1000}
    >
      <PasswordContentLeft website={website} password={password} isActive={isActive} />
      <ButtonsRight isActive={isActive} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 20,
    height: 55,
    elevation: 0.3,
    paddingHorizontal: 10,
  },
  activeItem: {
    elevation: 1,
  },
});

export default PasswordListItem;