import { SettingsT } from './types';
import { getApiUrl } from '../base';

export const getSetting = async (): Promise<SettingsT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(
      `${apiUrl}/v1/design/settings`, {
      next: {
        revalidate: 60,
      }
    }
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
