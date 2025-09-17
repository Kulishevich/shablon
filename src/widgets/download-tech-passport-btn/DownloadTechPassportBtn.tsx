import React from 'react';
import s from './styles.module.scss';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { getApiUrl } from '@/shared/api/base';

export const DownloadTechPassportBtn = async () => {
  const apiUrl = await getApiUrl();

  return (
    <div className={s.container}>
      <Button as={Link} href={`${apiUrl}/public/passports/download`}>
        Скачать техпаспорт
      </Button>
    </div>
  );
};
