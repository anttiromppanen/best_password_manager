import { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, BackHandler } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';

import { HeroSection, HomeFooter, LoginForm } from '../components';
import { theme } from '../styles';
import { FIREBASE_AUTH } from '../firebaseConfig';
const heroImage = require('../assets/img/heroImage.png');

function Home() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) router.push('/animations/successful_login');
    })
  }, []);

  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => unsubscribe.remove();
  }, [])

  return (
    <SafeAreaView style={styles.flexContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar hidden />
      <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
        <HeroSection
          image={heroImage}
          headingText='SALASANAHOLVI'
        />
        <LoginForm />
        <HomeFooter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    ...theme.container,
    justifyContent: 'space-evenly',
  },
  centeredContentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  centeredInputContainer: {
    flexDirection: 'column',
  },
  signInButton: {
    ...theme.buttonVariants.containedLg,
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;