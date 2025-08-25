import { CertificateT } from './types';
import { getApiUrl } from '../base';

export const getCertificates = async (): Promise<CertificateT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/certificates`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      return null;
    }

    const { data } = await res.json();

    return data || null;
  } catch (err) {
    console.error(err);

    return null;
  }
};
