export type ContactsT = {
  address: string | null;
  phones: string[];
  email: string | null;
  working_hours: string | null;
  social_links: {
    instagram: string | null;
    telegram: string | null;
    whatsapp: string | null;
    viber: string | null;
  };
  company_info: string | null;
  bank_details: string | null;
  company_description: string | null;
};

export type SettingsT = {
  colors: {
    primary: string | null;
    accent: string | null;
    secondary: string | null;
    button_secondary: string | null;
  };
  logo: string | null;
  favicon: string | null;
  feedback_image: string | null;
  about: {
    text: string | null;
    image: string | null;
  };
  delivery_payment: {
    delivery_text: string | null;
    payment_text: string | null;
  };
  privacy_policy: {
    text: string | null;
  };
  block_status: {
    contacts_enabled: boolean;
    advantages_enabled: boolean;
    banners_enabled: boolean;
    about_enabled: boolean;
    delivery_payment_enabled: boolean;
    privacy_policy_enabled: boolean;
  };
};
