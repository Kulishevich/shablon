import React from 'react';
import s from './CompanyDetails.module.scss';

export const CompanyDetails = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Реквизиты компании</h2>
      <div className={s.content}>
        <div className={s.elem}>
          <p className="h5">Юридический адрес:</p>
          <div>
            <p className="body_4">ООО “Альфа”</p>
            <p className="body_4">УНП 999999999</p>
            <p className="body_4">
              22004, РБ, г. Минск, пр-т Независимости, 11
            </p>
            <p className="body_4">
              В торговом реестре с января 2024, номер регистрации 550930
            </p>
          </div>
        </div>
        <div className={s.elem}>
          <p className="h5">Банковские реквизиты:</p>
          <div>
            <p className="body_4">Название компании: ООО “Альфа”</p>
            <p className="body_4">Расчетный счет: 40702810601300023440</p>
            <p className="body_4">
              Корреспондентский счет: 30101810200000000593
            </p>
            <p className="body_4">Банк: ЗАО «Альфа-Банк»</p>
            <p className="body_4">БИК: 044525593</p>
          </div>
        </div>
      </div>
    </div>
  );
};
