import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Showreel from './components/Showreel/Showreel.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import Work from './components/Work/Work.jsx';
import Process from './components/Process/Process.jsx';
import Team from './components/Team/Team.jsx';
import CTA from './components/CTA/CTA.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showreel />
        <WhatWeDo />
        <Work />
        <Process />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
