import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

import { FIREBASE_AUTH } from "../../firebaseConfig";

function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    try {
      FIREBASE_AUTH.signOut();
    } catch (error) {
      console.error(error);
    } finally {
      router.push('/home');
    }
  }
  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  )
}

export default SignOutButton;