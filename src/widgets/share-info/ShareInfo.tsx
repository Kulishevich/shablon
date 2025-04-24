import React from 'react';
import Image from 'next/image';
import s from './ShareInfo.module.scss';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { ArrowSmLeftIcon } from '@/shared/assets';

export const ShareInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={'/shares.png'} fill alt={'discount'} />
      </div>
      <div className={s.content}>
        <p className="h1_discount">Скидка 10% на кухонные стулья! </p>
        <span className="body_5">01.02.2025</span>
        <p className="body_2">
          Уважаемые клиенты!
          <br />
          Рады сообщить вам о нашей горячей акции: «Скидка 10% на кухонные
          стулья!» Стиль и комфорт теперь доступны по более выгодной цене.
          Обновите свою кухню с нашими элегантными и функциональными стульями,
          которые добавят уюта и очарования вашему интерьеру.
          <br />
          Не упустите возможность сэкономить и создать идеальное пространство
          для ваших кулинарных шедевров и семейных обедов. Акция действует
          до конца месяца, так что торопитесь, чтобы воспользоваться этим
          выгодным предложением! Заказывайте уже сегодня и наслаждайтесь
          комфортом и стилем в вашем доме.
        </p>
        <Button variant="link" as={Link} href={paths.shares}>
          <ArrowSmLeftIcon /> Назад к акциям
        </Button>
      </div>
    </div>
  );
};
