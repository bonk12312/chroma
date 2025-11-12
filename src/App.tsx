import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import LiveFeed from './components/LiveFeed';
import SubmitPromotion from './components/SubmitPromotion';
import TopPromoters from './components/TopPromoters';
import FeeClaims from './components/FeeClaims';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Stats />
        <LiveFeed />
        <SubmitPromotion />
        <TopPromoters />
        <FeeClaims />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
