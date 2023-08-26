import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";

export const useHandleLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response);
    } catch (error) {
      alert(`Sign in failed: ${error.message}`);
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  };
}