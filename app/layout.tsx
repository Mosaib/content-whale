import './globals.css';
import "./fontawesome";
import BootstrapClient from './BootstrapClient';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnerSection from './components/PartnerSection';
import SolutionSection from './components/SolutionSection';
import PriceSection from './components/PriceSection';
import FeatureSection from './components/FeatureSection';


export const metadata = {
  title: 'Content Whale - Home',
  description: 'Textual content solutions',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <BootstrapClient>
          <Navbar />
          <HeroSection />
          <PartnerSection />
          <SolutionSection />
          <PriceSection />
          <FeatureSection />
          {/* {children} */}
        </BootstrapClient>
      </body>
    </html>
  );
}
