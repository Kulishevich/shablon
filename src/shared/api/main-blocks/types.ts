export type FirstBlockT = {
  id: number;
  title: string | null;
  slug: string;
  fields: {
    text:
    {
      html: string;
    }
    image:
    {
      path: string;
      title: string | null;
      alt: string | null;
    }
  }
};

export type CardsBlockT = {
  id: number;
  title: string | null;
  slug: string;
  fields: {
    text: {
      html: string;
    },
    "button-text": {
      html: string;
    }
    card_1: {
      html: string;
    },
    card_2: {
      html: string;
    },
    card_3: {
      html: string;
    },
    card_4: {
      html: string;
    }
  }
};
