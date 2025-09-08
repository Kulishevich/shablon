'use client';

import { ProfileInfoSection } from '@/widgets/profile-info-section';
import { RootState } from '@/shared/lib/redux/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getOrders } from '@/shared/api/profile/profileApi';

export default function ProfileInfo() {
  const { isAuthenticated, token } = useSelector((state: RootState) => state.profile);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }

    getOrders(token);
  }, [isAuthenticated, router]);

  return (
    <main>
      <ProfileInfoSection page="orders" />
    </main>
  );
}
