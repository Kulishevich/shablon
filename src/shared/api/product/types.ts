export type ProductType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  photo_path: string;
  price: string;
  discount: string;
  is_popular: boolean;
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

export type CategoryT = {
  id: number;
  name: string;
  slug: string;
  description: string;
  photo_path: string | null;
  parent_id: number | null;
  order: number;
  filters: null;
  created_at: string;
  updated_at: string;
};
