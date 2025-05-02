import { ContactsT } from './types';

export const getSeoTag = async (): Promise<ContactsT | null> => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/contact`);

    const res = await data.json();

    return res;
  } catch (err) {
    return null;
  }
};
