import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedResources from '../components/FeaturedResources';
import Cta from '../components/Cta';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedResources />
      <Cta />
    </div>
  );
}
