import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Amenities from '@/components/Amenities';
import Rooms from '@/components/Rooms';
import Policies from '@/components/Policies';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Amenities />
      <Rooms />
      <Policies />
      <FAQ />
      <Footer />
    </div>
  );
}
