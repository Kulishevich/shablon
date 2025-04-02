import React from 'react';
import s from './CompanyDetails.module.scss';
import { Typography } from '@/shared/ui/typography';

export const CompanyDetails = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2">Реквизиты компании</Typography>
      <div className={s.content}>
        <div className={s.elem}>
          <Typography variant="h5">Юридический адрес:</Typography>
          <div>
            <Typography variant="body_4">ООО “Альфа”</Typography>
            <Typography variant="body_4">УНП 999999999</Typography>
            <Typography variant="body_4">
              22004, РБ, г. Минск, пр-т Независимости, 11
            </Typography>
            <Typography variant="body_4">
              В торговом реестре с января 2024, номер регистрации 550930
            </Typography>
          </div>
        </div>
        <div className={s.elem}>
          <Typography variant="h5">Банковские реквизиты:</Typography>
          <div>
            <Typography variant="body_4">
              Название компании: ООО “Альфа”
            </Typography>
            <Typography variant="body_4">
              Расчетный счет: 40702810601300023440
            </Typography>
            <Typography variant="body_4">
              Корреспондентский счет: 30101810200000000593
            </Typography>
            <Typography variant="body_4">Банк: ЗАО «Альфа-Банк»</Typography>
            <Typography variant="body_4">БИК: 044525593</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
