import { CartSection } from '@/widgets/cart-section';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';

export default function Cart() {
  return (
    <main>
      <ReduxProvider>
        <CartSection />
      </ReduxProvider>
    </main>
  );
}
