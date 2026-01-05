import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Success from '@/components/Success';
import Media from '@/components/Media';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <About />
      <Testimonials />
      <Success />
      <Media />
      <Contact />
    </main>
  );
}
