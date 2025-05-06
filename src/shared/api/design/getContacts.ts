import { ContactsT } from './types';

export const getContacts = async (): Promise<ContactsT | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/design/contacts`
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
