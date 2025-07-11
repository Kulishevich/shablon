import dynamic from 'next/dynamic';
import { getPopularProducts } from '@/shared/api/product/getPopularProducts';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getAllNews } from '@/shared/api/news/getAllNews';
import { getBanners } from '@/shared/api/banners/getBanners';
import { getSetting } from '@/shared/api/design/getSetting';
import { getContacts } from '@/shared/api/design/getContacts';
import { getCategories } from '@/shared/api/category/getCategories';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getReviews } from '@/shared/api/reviews/getReviews';
import { Suspense } from 'react';
import { MainShortcuts } from '@/widgets/main-shortcuts';
import { CatalogProducts } from '@/widgets/catalog-products';
import { PopularProductsSection } from '@/widgets/popular-products-section';
import { AboutUsSection } from '@/widgets/about-us-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { enrichProductsWithFullPath } from '@/shared/lib/utils/productUtils';

// Критические компоненты для FCP
const MainSlider = dynamic(() => import('@/widgets/main-slider').then((mod) => mod.MainSlider), {
  loading: () => <div style={{ height: '400px', background: '#f5f5f5' }} />,
});

const SeoBlock = dynamic(() => import('@/entities/seo-block').then((mod) => mod.SeoBlock));
const ContactsSection = dynamic(() =>
  import('@/widgets/contacts-section').then((mod) => mod.ContactsSection)
);

const Feedback = dynamic(() => import('@/widgets/feedback/Feedback').then((mod) => mod.Feedback));
const ReviewsSection = dynamic(() =>
  import('@/widgets/reviews-section').then((mod) => mod.ReviewsSection)
);
const BrandsSection = dynamic(() =>
  import('@/widgets/brands-section').then((mod) => mod.BrandsSection)
);
const NewsSliderSection = dynamic(() =>
  import('@/widgets/news-slider-section').then((mod) => mod.NewsSliderSection)
);
const MainBanner = dynamic(() => import('@/widgets/main-banner').then((mod) => mod.MainBanner));

export default async function Home() {
  const [
    popularProductsRaw,
    newsList,
    advantages,
    banners,
    setting,
    contacts,
    categories,
    brands,
    reviews,
  ] = await Promise.all([
    getPopularProducts(),
    getAllNews({}),
    getAdvantages(),
    getBanners(),
    getSetting(),
    getContacts(),
    getCategories(),
    getBrands(),
    getReviews(),
  ]);

  // Обогащаем популярные продукты полным путем
  const popularProducts = popularProductsRaw
    ? await enrichProductsWithFullPath(popularProductsRaw)
    : null;

  return (
    <main>
      <Suspense fallback={<div style={{ height: '400px', background: '#f5f5f5' }} />}>
        <MainSlider slides={banners || []} />
      </Suspense>

      <MainShortcuts categories={categories} />
      <CatalogProducts categories={categories} />

      <PopularProductsSection products={popularProducts} />

      <AboutUsSection text={setting?.about?.text || ''} image={setting?.about?.image || ''} />

      <AdvantagesSection advantages={advantages} />

      {!!brands?.length && (
        <Suspense>
          <BrandsSection brands={brands} />
        </Suspense>
      )}

      <MainBanner banner={setting?.main_banner || null} />

      <Suspense>
        <ReviewsSection reviews={reviews} />
      </Suspense>

      {!!newsList?.data?.length && (
        <Suspense>
          <NewsSliderSection newsList={newsList?.data} />
        </Suspense>
      )}

      <Suspense>
        <ContactsSection contacts={contacts} isMain />
      </Suspense>

      <Suspense>
        <SeoBlock page="/main" />
      </Suspense>

      <Suspense>
        <Feedback />
      </Suspense>
    </main>
  );
}
