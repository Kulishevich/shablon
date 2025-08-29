import { ProfileNavigation } from '@/entities/profile-navigation';
import s from './ProfileInfoSection.module.scss';

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
      </div>
    </div>
  );
};
