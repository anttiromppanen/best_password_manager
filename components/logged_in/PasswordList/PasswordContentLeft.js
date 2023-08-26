import { StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";

import { theme } from "../../../styles";

const convertPasswordToDots = (password) => {
  return '●'.repeat(password.length);
}

function LockIcon({ isActive }) {
  return (
    <Icon
      name={isActive ? "lock-open-outline" : "lock-closed-outline"}
      size={20}
      color={isActive ? theme.colors.primaryLight : theme.colors.primaryLight}
      style={styles.icon}
    />
  )
}

function PasswordContentLeft({ website, password, isActive }) {
  const passwordCensored = convertPasswordToDots(password);

  return (
    <View style={styles.container}>
      <View style={styles.textItemContainer}>
        <Icon
          name="globe-outline"
          size={20}
          color={theme.colors.primaryLight}
          style={{ ...styles.icon, marginBottom: -3 }}
        />
        <Text style={styles.websiteText}>{website}</Text>
      </View>
      <View style={styles.textItemContainer}>
        <LockIcon isActive={isActive} />
        <Text style={isActive ? styles.passwordShown : styles.passwordHidden}>
          {isActive ? password : passwordCensored}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  textItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  websiteText: {
    fontSize: 17,
    letterSpacing: 1.5,
    color: theme.colors.primaryDark,
  },
  passwordHidden: {
    fontSize: 17,
    color: theme.colors.lightGrey
  },
  passwordShown: {
    fontSize: 15,
    color: theme.colors.primaryLight,
    letterSpacing: 1.5,
  }
});

export default PasswordContentLeft;