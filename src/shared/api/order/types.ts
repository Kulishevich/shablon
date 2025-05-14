export type OrderPostT = {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  comment: string;
  delivery_method_id: number;
  payment_method_id: number;
  items: ItemT[];
};

type ItemT = {
  product_id: number;
  quantity: number;
};
