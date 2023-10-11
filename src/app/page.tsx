import { HomeAbout, HomeBanner, HomeBenefit1, HomeBenefit2, HomeBenefit3, HomeCta, } from '@/components/homeComponents'
import { ContactSection } from '@/components/contactForm';
import HomeCarousel from '@/components/carousel/homeCarousel'

export default function Home() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <HomeCarousel />
      <HomeAbout />
      <HomeBanner />
      <HomeBenefit1 />
      <HomeBenefit2 />
      <HomeBenefit3 />
      <HomeCta />
      <ContactSection />
    </div>
  );
}
