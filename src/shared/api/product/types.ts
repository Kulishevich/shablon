import { CategoryT } from '../category/types';

export type ProductsResponseT = {
  current_page: number;
  data: ProductT[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

export type ProductT = {
  id: number;
  name: string;
  slug: string;
  description: string;
  photo_path: string;
  price: string;
  discount: string;
  is_popular: boolean;
  is_novelty: boolean;
  sku: string;
  specifications: SpecificationT[] | null;
  is_active: boolean;
  category_id: number;
  manufacturer_id: number | null;
  created_at: string;
  updated_at: string;
  order: number;
  category: CategoryT;
  images: ImageT[];
  main_image: ImageT;
};

export type SpecificationT = {
  id: number;
  name: string;
  slug: string;
  type: string;
  unit: string;
  order: number;
  filterable: false;
  created_at: string;
  updated_at: string;
  pivot: {
    product_id: number;
    specification_id: number;
    value: string;
    created_at: string;
    updated_at: string;
  };
};

export type ImageT = {
  id: number;
  product_id: number;
  image_path: string;
  order: number;
  is_main: boolean;
  created_at: string;
  updated_at: string;
};
