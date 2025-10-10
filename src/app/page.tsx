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
import { getTags } from '@/shared/api/tags/getTags';
import { getStoreUrl } from '@/shared/api/base';
import { CertificatesSection } from '@/widgets/certificates-section/CertificatesSection';
import { FaqSection } from '@/widgets/faq-section';
import { getCertificates } from '@/shared/api/certificates/getCertificates';
import { HomeSecondInfoBlock } from '@/widgets/home-second-info-block/HomeSecondInfoBlock';
import { HomeFirstInfoBlock } from '@/widgets/home-first-info-block';
import { CalculationOfTheElectricHeatingSystem } from '@/widgets/calculation-of-the-electric-heating-system';
import { BrandsSection } from '@/widgets/brands-section';
import { ReviewsSection } from '@/widgets/reviews-section';
import { VideosBlockWrapper } from '@/entities/videos-block';
import { NewsSliderSection } from '@/widgets/news-slider-section';
import { ContactsSection } from '@/widgets/contacts-section';
import { SeoBlock } from '@/entities/seo-block';
import { Feedback } from '@/widgets/feedback/Feedback';

// Критические компоненты для FCP
const MainSlider = dynamic(() => import('@/widgets/main-slider').then((mod) => mod.MainSlider), {
  ssr: true,
  loading: () => <div style={{ height: '400px', background: '#f5f5f5' }} />,
});

const MainBanner = dynamic(() => import('@/widgets/main-banner').then((mod) => mod.MainBanner));

export default async function Home() {
  const [banners, setting, tags, storeUrl] = await Promise.all([
    getBanners(),
    getSetting(),
    getTags({}),
    getStoreUrl(),
  ]);

  const [
    popularProductsRaw,
    newsList,
    advantages,
    contacts,
    categories,
    reviews,
    brands,
    certificates,
  ] = await Promise.all([
    getPopularProducts(),
    getAllNews({}),
    getAdvantages(),
    getContacts(),
    getCategories(),
    getReviews(),
    getBrands(),
    getCertificates(),
  ]);

  // Обогащаем популярные продукты полным путем
  const popularProducts = popularProductsRaw
    ? await enrichProductsWithFullPath({ products: popularProductsRaw })
    : null;

  return (
    <main>
      <Suspense fallback={<div style={{ height: '400px', background: '#f5f5f5' }} />}>
        <MainSlider slides={banners || []} />
      </Suspense>

      <HomeFirstInfoBlock />
      <CalculationOfTheElectricHeatingSystem image={setting?.feedback_image || ''} />
      <HomeSecondInfoBlock />
      <MainShortcuts tags={tags} storeUrl={storeUrl} />
      <CatalogProducts categories={categories} />

      {!!popularProducts?.length && (
        <PopularProductsSection products={popularProducts} storeUrl={storeUrl} />
      )}

      <AboutUsSection
        text={setting?.about?.text || ''}
        image={setting?.about?.image || ''}
        storeUrl={storeUrl}
      />

      <AdvantagesSection advantages={advantages} />

      {!!certificates?.length && <CertificatesSection items={certificates} />}

      {!!brands?.length && <BrandsSection brands={brands} storeUrl={storeUrl} />}

      <MainBanner banner={setting?.main_banner || null} storeUrl={storeUrl} />

      <ReviewsSection reviews={reviews} storeUrl={storeUrl} />

      <VideosBlockWrapper />

      {!!newsList?.data?.length && (
        <NewsSliderSection newsList={newsList?.data} storeUrl={storeUrl} />
      )}

      <FaqSection />

      <ContactsSection contacts={contacts} isMain />

      <SeoBlock page="/main" />

      <Feedback />
    </main>
  );
}
