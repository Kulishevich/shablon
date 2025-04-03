import { OrderSection } from '@/widgets/order-section';
import s from './page.module.scss';

export default function Order() {
  return (
    <div className={s.page}>
      <OrderSection />
    </div>
  );
}
