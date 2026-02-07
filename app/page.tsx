import HomeContent from '@/components/HomeContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venkatesh Electro Plating | Industrial Surface Finishing',
  description: 'Advanced electroplating solutions for automotive and industrial sectors.',
  keywords: ['electroplating', 'industrial plating', 'surface finishing', 'zinc plating', 'chromium plating', 'India', 'electroplating services', 'industrial electroplating', 'zinc plating services', 'chromium plating services', 'zinc plating', 'chromium plating', 'zinc plating services', 'chromium plating services', 'coimbatore plating', 'coimbatore', 'tamil nadu', 'kerala', 'karnataka'],
};

export default function Home() {
  return <HomeContent />;
}
