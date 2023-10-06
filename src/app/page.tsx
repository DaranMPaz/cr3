import { HomeAbout, HomeBanner, HomeBenefit1, HomeBenefit2, HomeBenefit3, HomeCta, HomeHeader, HomeVideo, } from '@/app/components/homeComponents'
import { ContactSection } from './components/contactForm';

export default function Home() {
  return (
    <div className="flex flex-col h-full text-theme-gray-50">
      <HomeHeader />
      <HomeVideo />
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
