import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { theme } from '../../styles';
import { useRouter } from 'expo-router';

function Footer() {
  const router = useRouter();

  const handleRegisterPress = () => router.push('/register');

  return (
    <View style={styles.footerContainer}>
      <Text style={{ marginBottom: 5 }}>Not yet a member?</Text>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
  },
  registerButton: {
    ...theme.buttonVariants.containedLg,
    backgroundColor: theme.colors.secondary,
    width: '100%',
  },
  registerButtonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Footer;
