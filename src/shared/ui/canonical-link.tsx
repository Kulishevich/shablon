import Script from 'next/script';
import { getStoreUrl } from '@/shared/api/base';

interface CanonicalLinkProps {
  href: string;
}

export const CanonicalLink = async ({ href }: CanonicalLinkProps) => {
  const storeUrl = await getStoreUrl();

  return (
    <Script
      id="canonical-link"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          if (!document.querySelector('link[rel="canonical"]')) {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = '${storeUrl}/${href}';
            document.head.appendChild(link);
          }
        `,
      }}
    />
  );
};
