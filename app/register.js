import { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";

import { HeroSection, RegisterForm } from "../components";
const registerImage = require('../assets/img/registerHero.png')
import { theme } from "../styles";
import { FIREBASE_AUTH } from "../firebaseConfig";

function Register() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) router.push('/animations/successful_login');
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ title: 'login' }} />
      <HeroSection image={registerImage} headingText='CREATE ACCOUNT' />
      <RegisterForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: theme.container,
});

export default Register;