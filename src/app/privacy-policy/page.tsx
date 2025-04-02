import { PrivacyPolicyContent } from '@/widgets/privacy-policy-content';
import s from './page.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={s.page}>
      <PrivacyPolicyContent />
    </div>
  );
}
