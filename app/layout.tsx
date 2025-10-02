import './globals.css';
import BootstrapClient from './BootstrapClient';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnerSection from './components/partnerSection';

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
          {/* {children} */}
        </BootstrapClient>
      </body>
    </html>
  );
}
