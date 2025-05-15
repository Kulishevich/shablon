export type SeoT = {
  created_at: string;
  description: string;
  id: 1;
  keywords: string;
  name: string;
  og_description: string;
  og_title: string;
  title: string;
  updated_at: string;
};

export type SeoPageT = {
  success: boolean;
  data: {
    id: number;
    page: string;
    tag: string;
    content: string;
  };
};
