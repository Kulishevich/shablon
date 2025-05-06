import { SettingsT } from './types';

export const getSetting = async (): Promise<SettingsT | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/design/settings`
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
