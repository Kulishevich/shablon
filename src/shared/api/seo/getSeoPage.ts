import { SeoPageT } from "./types";

export const getSeoPage = async (page: string): Promise<SeoPageT | null> => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/seo/text?page=${page}`
    );

    const res = await data.json();

    if (!res.success) {
      return null;
    }

    return res;
  } catch (error) {
    return null;
  }
};
