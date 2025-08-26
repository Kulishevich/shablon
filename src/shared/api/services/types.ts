export type ServiceT = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  photo_path: string;
  blocks: TextImageBlockT[] | null;
};

export type TextImageBlockT = {
  id: number;
  service_id: number;
  type: "text_image";
  text: string;
  image_path: string | null;
  image_position: "left" | "right";
}