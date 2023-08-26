import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import { theme } from "../../styles";

function PasswordInput({ placeholder, value, setValue }) {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  return (
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={passwordVisibility}
        autoCorrect={false}
        autoCapitalize="none"
        textContentType="password"
        enablesReturnKeyAutomatically
        style={styles.styledTextInputWithMargin}
        placeholderTextColor={theme.colors.darkerGrey}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Pressable onPress={handlePasswordVisibility} style={{ left: -40, top: -3 }}>
        <MaterialCommunityIcons
          name={rightIcon}
          size={22}
          color={passwordVisibility ? theme.colors.darkerGrey : theme.colors.primaryDark} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  styledTextInputWithMargin: {
    ...theme.inputVariants.lg,
    marginBottom: theme.spacing.sm,
  },
});

export default PasswordInput;