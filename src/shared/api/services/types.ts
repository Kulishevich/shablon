export type ServiceT = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  photo_path: string;
  blocks: (TextImageBlockT | TextGridBlockT | FeaturesImages | TextT | ImageT)[] | null;
};

export type TextImageBlockT = {
  id: number;
  service_id: number;
  type: "text_image";
  text: string;
  image_path: string | null;
  image_position: "left" | "right";
}

export type TextGridBlockT = {
  id: number;
  service_id: number;
  type: "features4";
  text: string;
  title: string;
  content: string;
  items: {
    title: string;
    content: string;
  }[]
}


export type FeaturesImages = {
  id: number;
  service_id: number;
  type: "images3";
  text: string;
  images: {
    caption: string;
    image_path: string;
  }[]
}

export type TextT = {
  id: number;
  service_id: number;
  type: "text";
  text: string;
}

export type ImageT = {
  id: number;
  service_id: number;
  type: "image";
  image_path: string;
}