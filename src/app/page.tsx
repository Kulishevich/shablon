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
import { BrandCard } from '@/entities/brand-card';
import { ReviewCard } from '@/entities/review-card';
import { Feedback } from '@/widgets/feedback/Feedback';

export default async function Home() {
  const popularProducts = await getPopularProducts();
  const newsList = await getAllNews({});
  const advantages = await getAdvantages();
  const banners = await getBanners();
  const setting = await getSetting();
  const contacts = await getContacts();
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <main>
      <MainSlider slides={banners || []} />
      <CatalogProducts categories={categories} />
      <PopularProductsSection products={popularProducts} />
      <SliderWrapper title="Бренды, с которыми мы сотрудничаем" variant="discount">
        {brands?.map((brand) => <BrandCard {...brand} key={brand.id} />)}
      </SliderWrapper>
      <AboutUsSection text={setting?.about?.text || ''} image={setting?.about?.image || ''} />
      <AdvantagesSection advantages={advantages} />
      <SliderWrapper title="Отзывы" variant="news">
        {new Array(6).fill('').map((_, index) => (
          <ReviewCard key={index} />
        ))}
      </SliderWrapper>
      <SliderWrapper title="Новости" variant="news">
        {newsList?.data?.map((news, index) => <NewsCard key={index} news={news} />)}
      </SliderWrapper>
      <ContactsSection contacts={contacts} isMain />

      <SeoBlock page="main" />
      <Feedback />
    </main>
  );
}
