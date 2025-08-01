'use client';
import { useState, useEffect } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import s from './HeaderFixed.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { ArrowRightIcon } from '@/shared/assets';
import { motion as m } from 'framer-motion';

export const HeaderFixed = ({
  categories,
  contacts,
  products,
}: {
  categories: CategoryT[];
  contacts: ContactsT | null;
  products: ProductT[];
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition >= windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <m.div
      className={clsx(s.container, !isVisible && s.hidden)}
      initial={{ height: 0 }}
      animate={{ height: isOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className={s.inner}>
        <Navigation contacts={contacts} />
        <Search categories={categories} products={products} />
      </div>

      <button className={s.button} onClick={handleToggle} aria-label="Открыть/закрыть меню">
        <ArrowRightIcon style={{ transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
      </button>
    </m.div>
  );
};
