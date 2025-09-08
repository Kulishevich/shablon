'use client';

import { ProfileInfoSection } from '@/widgets/profile-info-section';
import { RootState } from '@/shared/lib/redux/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfileInfo() {
  const { isAuthenticated } = useSelector((state: RootState) => state.profile);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return (
    <main>
      <ProfileInfoSection page="settings" />
    </main>
  );
}
