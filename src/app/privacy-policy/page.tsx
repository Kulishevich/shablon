import { getSetting } from '@/shared/api/design/getSetting';
import { PrivacyPolicyContent } from '@/widgets/privacy-policy-content';

export default async function PrivacyPolicy() {
  const setting = await getSetting();

  return (
    <main>
      <PrivacyPolicyContent content={setting?.privacy_policy?.text} />
    </main>
  );
}
