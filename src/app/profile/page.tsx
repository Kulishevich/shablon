'use client';

import { ProfileSection } from '@/widgets/profile-section';
import { RootState } from '@/shared/lib/redux/store';
import { useSelector } from 'react-redux';
import { notFound, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Profile() {
  const { isAuthenticated } = useSelector((state: RootState) => state.profile);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return (
    <main>
      <ProfileSection />
    </main>
  );
}
