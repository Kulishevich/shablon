import { ClockIcon, LocationIcon, PhoneIcon } from '@/shared/assets';
import React from 'react';
import s from './CompanyContacts.module.scss';
import Link from 'next/link';
import { ContactsT } from '@/shared/api/design/types';

export const CompanyContacts = ({
  contacts,
}: {
  contacts: ContactsT | null;
}) => {
  return (
    <div className={s.contacts}>
      <div className={s.contactElem}>
        <LocationIcon />
        <p className="body_6">{contacts?.address}</p>
      </div>
      <div className={s.contactElem}>
        <ClockIcon />
        <p className="body_6">{contacts?.working_hours}</p>
      </div>
      <div className={s.contactElem}>
        <PhoneIcon />
        <div className={s.phones}>
          {contacts?.phones?.map((phone, index) => (
            <Link href={`tel: ${phone}`} className="body_6" key={index}>
              {phone}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
