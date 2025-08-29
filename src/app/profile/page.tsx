'use client';

import { ProfileSection } from '@/widgets/profile-section';
import { RootState } from '@/shared/lib/redux/store';
import { useSelector } from 'react-redux';
import { notFound, useRouter } from 'next/navigation';

export default function Profile() {
  const { isAuthenticated } = useSelector((state: RootState) => state.profile);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/');
  }

  return (
    <main>
      <ProfileSection />
    </main>
  );
}
