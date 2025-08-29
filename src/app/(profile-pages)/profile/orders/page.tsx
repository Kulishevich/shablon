'use client';

import { ProfileInfoSection } from '@/widgets/profile-info-section';
import { RootState } from '@/shared/lib/redux/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function ProfileInfo() {
  const { isAuthenticated } = useSelector((state: RootState) => state.profile);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/');
  }

  return (
    <main>
      <ProfileInfoSection page="orders" />
    </main>
  );
}
