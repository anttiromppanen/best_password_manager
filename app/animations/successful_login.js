import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { FullScreenAnimation } from '../../components';

const loginAnimation = require('../../assets/animations/loginSuccessful.json');

function LoginSuccessful() {
  return (
    <FullScreenAnimation
      animationSource={loginAnimation}
      redirectUrl="/logged_in"
      duration={5000}
    />
  )
}

export default LoginSuccessful;