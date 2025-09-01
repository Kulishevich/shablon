import { ProfileNavigation } from '@/entities/profile-navigation';
import s from './ProfileInfoSection.module.scss';
import { ProfileInfo } from '@/entities/profile-info/ProfileInfo';
import { ProfileSettings } from '@/entities/profile-settings/ProfileSettings';
import { ProfileHistory } from '@/entities/profile-history';

export const ProfileInfoSection = ({ page }: { page: string }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1 className="h1">
          {page === 'info' && 'Личные данные'}
          {page === 'orders' && 'История заказов'}
          {page === 'settings' && 'Настройки профиля'}
        </h1>
      </div>
      <div className={s.content}>
        <ProfileNavigation activePage={page} />
        {page === 'info' && <ProfileInfo />}
        {page === 'settings' && <ProfileSettings />}
        {page === 'orders' && <ProfileHistory />}
      </div>
    </div>
  );
};
