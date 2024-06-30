'use client'; // This directive ensures the component is treated as a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { confirmSignUp } from 'aws-amplify/auth';
import styles from '../../src/styles/Register.module.css';

export default function ConfirmSignUp() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleConfirmSignUp = async () => {
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      router.push('/login');
    } catch (error) {
      console.error('Error confirming sign up', error);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Confirmation Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleConfirmSignUp}>Confirm</button>
    </div>
  );
}
