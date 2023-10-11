import { HomeAbout, HomeBanner, HomeBenefit1, HomeBenefit2, HomeBenefit3, HomeCta, } from '@/components/homeComponents'
import { ContactSection } from '@/components/contactForm';

export default function Home() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
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
