'use client';
import { YandexMap } from '@/shared/ui/yandex-map/YandexMap';
import { Collapse } from '@/shared/ui/collapse';
import s from './DeliverySection.module.scss';
import { ContactsT } from '@/shared/api/design/types';
export const DeliverySection = ({
  content,
  contacts,
}: {
  content:
    | {
        delivery_text: string | null;
        payment_text: string | null;
      }
    | undefined;
  contacts: ContactsT | null;
}) => {
  return (
    <div className={s.wrapper}>
      <h1 className="h1">Доставка и оплата</h1>
      <Collapse title="Доставка">
        <div className={s.container}>
          <p className="body_2">{content?.delivery_text}</p>
          <div className={s.deliveryArea}>
            <p className="h5">Область доставки</p>
            {contacts?.address && <YandexMap address={contacts?.address} className={s.map} />}
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
