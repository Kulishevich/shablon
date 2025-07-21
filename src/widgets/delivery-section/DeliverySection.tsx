'use client';
import { Collapse } from '@/shared/ui/collapse';
import s from './DeliverySection.module.scss';
import { PaymentAndDeliveryT } from '@/shared/api/delivery-and-payment/types';

export const DeliverySection = ({ content }: { content: PaymentAndDeliveryT[] | null }) => {
  return (
    <div className={s.wrapper}>
      <h1 className="h1">Доставка и оплата</h1>
      {content?.map((item) => (
        <Collapse title={item.title}>
          <div className={s.container} dangerouslySetInnerHTML={{ __html: item.content }} />
        </Collapse>
      ))}
    </div>
  );
};
