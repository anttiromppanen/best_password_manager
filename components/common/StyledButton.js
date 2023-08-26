import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

import { theme } from "../../styles";

const colorSelector = (color) => {
  switch (color) {
    case 'primary':
    case 'secondary':
    case 'success':
    case 'danger':
    case 'failure':
      return theme.colors[color];
    default:
      return theme.colors.primary;
  }
}

function StyledButton({
  children,
  fullWidth,
  color,
  loading,
  handlePress,
}) {
  const parsedColor = colorSelector(color);

  return (
    <TouchableOpacity
      style={{
        ...styles.base,
        backgroundColor: parsedColor,
        width: fullWidth && '100%',
        height: styles.size.lg,
        opacity: loading ? 0.7 : 1,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm,
      }}
      onPress={handlePress}
    >
      {loading && <ActivityIndicator size="small" style={{ marginLeft: -5, marginRight: 5 }} />}
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: theme.buttonVariants.base,
  size: {
    sm: theme.heights.sm,
    md: theme.heights.md,
    lg: theme.heights.lg,
  }
});

export default StyledButton;