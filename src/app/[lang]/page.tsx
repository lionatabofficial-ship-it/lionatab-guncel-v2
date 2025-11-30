import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import TrustStats from '@/components/TrustStats';
import Features from '@/components/Features';
import Platforms from '@/components/Platforms';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<Benefits />
			<TrustStats />
			<Features />
			<Platforms />
			<Testimonials />
			<Pricing />
			<FAQ />
			<CTA />
			<Footer />
		</main>
	);
}
