'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from 'aws-amplify/auth';
import styles from '../../src/styles/Register.module.css';

export default function RegisterComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });
  const router = useRouter();

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setAlert({ message: 'Passwords do not match', type: 'error' });
      return;
    }
    if (!validatePassword(password)) {
      setAlert({
        message:
          'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.',
        type: 'error',
      });
      return;
    }
    try {
      await signUp({
        username: email,
        password,
      });
      setAlert({ message: 'Registration successful!', type: 'success' });
      router.push('/confirm');
    } catch (error) {
      console.error('Error registering', error);
      setAlert({
        message: 'Error registering. Please try again.',
        type: 'error',
      });
    }
  };

  return (
    <div className={styles.registerContainer}>
      {alert.message && (
        <div
          className={`${styles.alert} ${alert.type === 'error' ? styles.error : styles.success}`}
        >
          {alert.message}
        </div>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={styles.inputField}
      />
      <button onClick={handleRegister} className={styles.button}>
        Register
      </button>
    </div>
  );
}
