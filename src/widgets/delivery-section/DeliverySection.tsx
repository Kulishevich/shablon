'use client';
import { YandexMap } from '@/shared/ui/yandex-map/YandexMap';
import { Collapse } from '@/shared/ui/collapse';
import s from './DeliverySection.module.scss';

export const DeliverySection = ({
  content,
}: {
  content:
    | {
        delivery_text: string | null;
        payment_text: string | null;
      }
    | undefined;
}) => {
  return (
    <div className={s.wrapper}>
      <h1 className="h1">Доставка и оплата</h1>
      <Collapse title="Доставка">
        <div className={s.container}>
          <p className="body_2">{content?.delivery_text}</p>
          <div className={s.deliveryArea}>
            <p className="h5">Область доставки</p>
            <YandexMap className={s.map} />
          </div>
        </div>
      </Collapse>
      <Collapse title="Оплата">
        <div className={s.container}>
          <p className="body_2">{content?.payment_text}</p>
        </div>
      </Collapse>
    </div>
  );
};
