'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import styles from '../../src/styles/Dashboard.module.css';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        console.log('el usuario es', user);
        setUser(user);
      } catch (error) {
        router.push('/');
      }
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardHeader}>
        Welcome to your dashboard, {user.username}!
      </h1>
      <button onClick={handleSignOut} className={styles.button}>
        Sign Out
      </button>
    </div>
  );
}
