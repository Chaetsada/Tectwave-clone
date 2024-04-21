import ArticlesSection from "./container/Home-page/articles-section";
import BestSellerSection from "./container/Home-page/bestseller-section";
import CategoriesSection from "./container/Home-page/categories-section";
import ExploreSection from "./container/Home-page/explore-section";
import FeaturedSection from "./container/Home-page/featured-section";
import HeroSection from "./container/Home-page/hero-section";
import QualitySection from "./container/Home-page/quality-section";
import SubscribeSection from "./container/Home-page/subscribe-section";
import ValuePropSection from "./container/Home-page/valueprop-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ExploreSection />
      <BestSellerSection />
      <QualitySection />
      <FeaturedSection />
      <ValuePropSection />
      <SubscribeSection />
      <ArticlesSection />
    </main>
  );
}
