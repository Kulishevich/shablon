import { ContactsT } from './types';
import { getApiUrl } from '../base';

export const getContacts = async (): Promise<ContactsT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/design/contacts`, {
      next: {
        revalidate: 60,
      },
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
