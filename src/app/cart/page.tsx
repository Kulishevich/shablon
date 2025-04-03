import { CartSection } from '@/widgets/cart-section';
import s from './page.module.scss';

export default function Cart() {
  return (
    <div className={s.page}>
      <CartSection />
    </div>
  );
}
