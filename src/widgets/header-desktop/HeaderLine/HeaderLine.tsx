import React from 'react';
import { FlagBY } from '@/shared/assets';
import s from './HeaderLine.module.scss';
import { ProfileButton } from '@/entities/profile-button/ProfileButton';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import { NotificationProvider } from '@/widgets/notification-popup';

export const HeaderLine = ({}: {}) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.country}>
          <FlagBY />
          <span className="body_7">Республика Беларусь</span>
        </div>

        <ReduxProvider>
          <NotificationProvider>
            <ProfileButton />
          </NotificationProvider>
        </ReduxProvider>
      </div>
    </div>
  );
};
