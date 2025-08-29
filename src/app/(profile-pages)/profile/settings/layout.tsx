import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { paths } from '@/shared/config/constants/paths';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag({ tag: '/profile/info' });

  return {
    title: seo?.title ?? 'Личный кабинет - Личные данные',
    description: seo?.description ?? 'Личный кабинет - Личные данные',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Личный кабинет - Личные данные',
      description: seo?.og_description ?? 'Личный кабинет - Личные данные',
    },
  };
};

export default async function ProfileInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Breadcrumbs dynamicPath={[{ title: 'Настройки профиля', path: paths.profile_settings }]} />
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
}
