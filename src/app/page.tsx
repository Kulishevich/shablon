import { AboutUsSection } from '@/widgets/about-us-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { MainSlider } from '@/widgets/main-slider';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { PopularProductsSection } from '@/widgets/popular-products-section';
import { getPopularProducts } from '@/shared/api/product/getPopularProducts';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getAllNews } from '@/shared/api/news/getAllNews';
import { getBanners } from '@/shared/api/banners/getBanners';
import { getSetting } from '@/shared/api/design/getSetting';
import { SeoBlock } from '@/entities/seo-block';
import { ContactsSection } from '@/widgets/contacts-section';
import { getContacts } from '@/shared/api/design/getContacts';
import { CatalogProducts } from '@/widgets/catalog-products';
import { getCategories } from '@/shared/api/category/getCategories';
import { getBrands } from '@/shared/api/brands/getBrands';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getReviews } from '@/shared/api/reviews/getReviews';
import { ReviewsSection } from '@/widgets/reviews-section';
import { BrandsSection } from '@/widgets/brands-section';
import { NewsSliderSection } from '@/widgets/news-slider-section';

export default async function Home() {
  const popularProducts = await getPopularProducts();
  const newsList = await getAllNews({});
  const advantages = await getAdvantages();
  const banners = await getBanners();
  const setting = await getSetting();
  const contacts = await getContacts();
  const categories = await getCategories();
  const brands = await getBrands();
  const reviews = await getReviews();

  return (
    <main>
      <MainSlider slides={banners || []} />
      <CatalogProducts categories={categories} />
      <PopularProductsSection products={popularProducts} />
      {!!brands?.length && <BrandsSection brands={brands} />}
      <AboutUsSection text={setting?.about?.text || ''} image={setting?.about?.image || ''} />
      <AdvantagesSection advantages={advantages} />
      <ReviewsSection reviews={reviews} />
      {!!newsList?.data?.length && <NewsSliderSection newsList={newsList?.data} />}
      <ContactsSection contacts={contacts} isMain />

      <SeoBlock page="main" />
      <Feedback />
    </main>
  );
}
