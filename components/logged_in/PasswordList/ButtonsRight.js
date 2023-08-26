import { StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";

import { theme } from '../../../styles';

function IconContainer() {
  return (
    <View style={styles.iconContainer}>
      <Icon.Button
        name="create-outline"
        size={25}
        color={theme.colors.primaryDark}
        style={{ ...styles.icon }}
      />
      <Icon.Button
        name="trash-outline"
        size={25}
        color={theme.colors.failure}
        style={styles.icon}
      />
    </View>
  )
}

function ButtonsRight({ isActive }) {
  return (
    <View style={styles.container}>
      {
        !isActive
          ? <Text style={styles.textWhenNotFocus} >SHOW</Text>
          : <IconContainer />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  textWhenNotFocus: {
    color: theme.colors.primaryLight,
    letterSpacing: 1.5,
    fontWeight: 500,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'white',
  }
});

export default ButtonsRight;