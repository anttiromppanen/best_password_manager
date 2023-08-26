import { View, StyleSheet, StatusBar } from 'react-native';
import { Stack, useRouter } from "expo-router";
import LottieView from 'lottie-react-native';

import { theme } from '../../styles';

function FullScreenAnimation({
  animationSource,
  redirectUrl,
  colorFilters,
  duration = 10000
}) {
  const router = useRouter();

  return (
    <View style={styles.animationContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar hidden />
      <LottieView
        autoPlay
        loop={false}
        duration={duration}
        source={animationSource}
        resizeMode='contain'
        colorFilters={colorFilters}
        onAnimationFinish={() => router.push(redirectUrl)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    margin: 0,
    backgroundColor: theme.colors.background,
  }
});

export default FullScreenAnimation;