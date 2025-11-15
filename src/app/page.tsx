import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Counter from '@/components/Counter';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Counter />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
