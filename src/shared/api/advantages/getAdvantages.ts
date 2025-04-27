import { AdvantageType } from './types';

export const getAdvantages = async (): Promise<AdvantageType[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/advantages`);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
