import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Logo = ({
  width = 220,
  height = 86,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Link href={paths.home}>
      <Image src="/logo.png" width={width} height={height} alt="logo" />
    </Link>
  );
};
