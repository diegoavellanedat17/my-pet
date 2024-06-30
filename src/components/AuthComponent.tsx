import { signIn } from 'aws-amplify/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Auth.module.css';

export default function AuthComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const userSignIn = async () => {
    try {
      const response = await signIn({ username: email, password });
      console.log('Sign-in response:', response);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  //   const signInWithGoogle = async () => {
  //     try {
  //       await Auth.federatedSignIn({ provider: 'Google' });
  //     } catch (error) {
  //       console.error('Error signing in with Google', error);
  //     }
  //   };

  return (
    <div className={styles.authContainer}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={userSignIn}>Sign In</button>
      {/* <button onClick={signInWithGoogle}>Sign In with Google</button> */}
    </div>
  );
}
