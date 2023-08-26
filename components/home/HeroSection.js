import { View, Image, Text, StyleSheet } from 'react-native';

import { theme } from '../../styles';
import { useKeyboardVisible } from '../../hooks/useKeyboardVisible';

function HeroSection({ image, headingText }) {
  const isKeyboardVisible = useKeyboardVisible();

  return (
    <View style={{ alignItems: 'center' }}>
      {!isKeyboardVisible &&
        <Image source={image} style={{ resizeMode: 'contain', height: 210, width: 300, marginBottom: theme.spacing.sm }} />
      }
      <Text style={styles.h1}>{headingText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    ...theme.textVariants.h1,
    color: theme.colors.primaryDark,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  }
});

export default HeroSection