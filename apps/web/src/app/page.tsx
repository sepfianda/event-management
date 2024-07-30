import EventCard from '@/components/card/EventCard';
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
