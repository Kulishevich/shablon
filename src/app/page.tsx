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
import { Feedback } from '@/entities/feedback/Feedback';
import { SeoBlock } from '@/entities/seo-block';
import { ContactsSection } from '@/widgets/contacts-section';
import { getContacts } from '@/shared/api/design/getContacts';

export default async function Home() {
  const popularProducts = await getPopularProducts();
  const newsList = await getAllNews({});
  const advantages = await getAdvantages();
  const banners = await getBanners();
  const setting = await getSetting();
  const contacts = await getContacts();

  return (
    <main>
      <MainSlider slides={banners || []} />
      <PopularProductsSection products={popularProducts} />
      <AboutUsSection text={setting?.about?.text || ''} image={setting?.about?.image || ''} />
      <AdvantagesSection advantages={advantages} />
      <SliderWrapper title="Новости" variant="news">
        {newsList?.data?.map((news, index) => <NewsCard key={index} news={news} />)}
      </SliderWrapper>
      <ContactsSection contacts={contacts} isMain />

      <SeoBlock page="main" />
      <Feedback />
    </main>
  );
}
