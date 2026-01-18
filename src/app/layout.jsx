import CTAFooter from '@/components/CTAFooter';
import './globals.css'; 
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'PlantPedia - Your Botanical Guide',
  description: 'Discover and explore thousands of plant species',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <CTAFooter></CTAFooter>
      </body>
    </html>
  );
}