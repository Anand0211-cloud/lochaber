import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FrameworkContract from './pages/FrameworkContract';
import BanksInsurers from './pages/target-groups/BanksInsurers';
import Banks from './pages/target-groups/Banks';
import Brokers from './pages/target-groups/Brokers';
import Developers from './pages/target-groups/Developers';
import Knowledge from './pages/Knowledge';
import BlogPost from './pages/BlogPost';
import FrameworkBankContract from './pages/FrameworkBankContract';
import ServiceDetail from './pages/ServiceDetail';
import BanksAppointment from './pages/landing/BanksAppointment';
import Imprint from './pages/Imprint';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Target Groups - German */}
            <Route path="/zielgruppen/banken" element={<Banks />} />
            <Route path="/zielgruppen/versicherer" element={<BanksInsurers />} />
            <Route path="/zielgruppen/makler" element={<Brokers />} />
            <Route path="/zielgruppen/projektentwickler" element={<Developers />} />
            <Route path="/zielgruppen/banken-versicherer" element={<BanksInsurers />} />
            <Route path="/zielgruppen/makler-bestandshalter" element={<Brokers />} />
            
            {/* Target Groups - English Legacy */}
            <Route path="/target-groups/banks" element={<Banks />} />
            <Route path="/target-groups/insurers" element={<BanksInsurers />} />
            <Route path="/target-groups/brokers" element={<Brokers />} />
            <Route path="/target-groups/developers" element={<Developers />} />
            <Route path="/target-groups/banks-insurers" element={<BanksInsurers />} />
            <Route path="/target-groups/brokers-portfolio-holders" element={<Brokers />} />
            
            {/* Services - German */}
            <Route path="/leistungen" element={<Services />} />
            <Route path="/leistungen/:id" element={<ServiceDetail />} />
            <Route path="/leistungen/rahmenvertrag-banken" element={<FrameworkContract />} />
            
            {/* Services - English Legacy */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/framework-contract" element={<FrameworkContract />} />
            
            {/* General - German */}
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            
            {/* General - English Legacy */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ueber-lochaber" element={<About />} />
            
            {/* Knowledge */}
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/knowledge/:slug" element={<BlogPost />} />
            
            {/* Landing & Legal */}
            <Route path="/landing/banks-appointment" element={<BanksAppointment />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/datenschutz" element={<PrivacyPolicy />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
