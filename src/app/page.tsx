import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AreasSection from '@/components/sections/AreasSection';
import HomeCtaBanner from '@/components/sections/HomeCtaBanner';

export const metadata: Metadata = {
  title: 'ARNA INFRA PROJECTS | Best Construction Company in Hanuman Junction & Vijayawada',
  description:
    'ARNA INFRA PROJECTS – #1 construction company in Hanuman Junction. Villa construction, hospital design, building approvals, interior design across Krishna District, Andhra Pradesh.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <AreasSection />
      <HomeCtaBanner />
    </>
  );
}
