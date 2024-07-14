import CarouselCard from '@/components/card/CarouselCard';
import EventCard from '@/components/card/EventCard';
import MarqueeCard from '@/components/card/MarqueeCard';
import CityList from '@/components/city/CityList';
import HeroSection from '@/components/hero/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventCard />
      <CityList />
    </div>
  );
}
