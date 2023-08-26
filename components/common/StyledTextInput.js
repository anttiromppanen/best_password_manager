import { StyleSheet, TextInput } from "react-native";

import { theme } from "../../styles";

function StyledTextInput({
  placeholder,
  textContentType,
  value,
  setValue
}) {
  return (
    <TextInput
      placeholder={placeholder}
      textContentType={textContentType}
      autoCapitalize="none"
      style={styles.styledTextInputWithMargin}
      placeholderTextColor={theme.colors.darkerGrey}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  )
}

const styles = StyleSheet.create({
  styledTextInputWithMargin: {
    ...theme.inputVariants.lg,
    marginBottom: theme.spacing.sm,
  },
});

export default StyledTextInput;