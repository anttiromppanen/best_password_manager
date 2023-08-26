import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

import { theme } from '../../../styles';
import StyledTextInput from "../../common/StyledTextInput";
import PasswordInput from "../../common/PasswordInput";
import StyledButton from '../../common/StyledButton';
import { useHandleLogin } from '../../../hooks/useHandleLogin';

function LoginForm() {
  const { email, setEmail, password, setPassword, loading, handleLogin } = useHandleLogin();

  return (
    <KeyboardAvoidingView behavior="padding">
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={{ color: theme.colors.primary, fontSize: 14, fontWeight: 'bold' }}>Forgot Password?</Text>
        </TouchableOpacity>
        <StyledButton
          style={styles.buttonContained}
          handlePress={handleLogin}
          loading={loading}
        >
          <Text style={{ color: theme.colors.white, fontSize: 16, fontWeight: 'bold' }}>Login</Text>
        </StyledButton>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  styledTextInputWithMargin: {
    ...theme.inputVariants.lg,
    marginBottom: theme.spacing.sm,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContained: {
    ...theme.buttonVariants.containedLg,
    alignItems: 'center',
  },
  buttonText: {
    ...theme.buttonVariants.textLg,
    alignItems: 'center',
  },
});

export default LoginForm;
