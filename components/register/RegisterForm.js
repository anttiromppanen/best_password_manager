import { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";

import StyledTextInput from "../common/StyledTextInput";
import PasswordInput from "../common/PasswordInput";
import { theme } from "../../styles";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { useRouter } from "expo-router";
import StyledButton from "../common/StyledButton";

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = FIREBASE_AUTH;

  const handleCreateUser = async () => {
    if (password !== verifyPassword) {
      return alert('Passwords must match');
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      alert(`Error with creating user: ${error.message}`)
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
      setVerifyPassword('');
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={{ marginTop: theme.spacing.md }}>
      <StyledTextInput
        placeholder="email"
        textContentType="emailAddress"
        value={email}
        setValue={setEmail}
      />
      <PasswordInput
        placeholder="password"
        value={password}
        setValue={setPassword}
      />
      <PasswordInput
        placeholder="password again"
        value={verifyPassword}
        setValue={setVerifyPassword}
      />
      <StyledButton color="secondary" loading={loading} handlePress={handleCreateUser}>
        <Text style={styles.registerButtonText}>Register</Text>
      </StyledButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  registerButton: {
    ...theme.buttonVariants.containedLg,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  registerButtonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterForm;