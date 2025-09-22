export type VideoT = {
  id: number;
  title: string | null;
  slug: string;
  fields: {
    [key: string]: {
      html: string;
    };
  }
};
