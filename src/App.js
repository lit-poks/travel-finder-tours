import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/about_us/about_us.js';
import ComingSoon from './components/coming_soon.js'
import ContactUs from './components/contact_us/contact_us.js';
import Homepage from './components/homepage'
import TourPackages from './components/packages/tour_packages.js';
import AdventurePackages from './components/packages/trekking/adventure_packages.js';
import { inject } from '@vercel/analytics';
import Footer from './components/footer.js';
import FooterModal from './components/footer_modal.js';
import Gallery from './components/gallery.js';
import { useState } from 'react';

inject();


function App() {
  const [faqModal, setFaqModal] = useState(true);

  const toggleFaqModal = () => {
    setFaqModal(!faqModal)
  }
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
      {
        faqModal == false && <FooterModal toggleFaqModal={toggleFaqModal} faqModal={faqModal} />
      }
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/adventure" element={<AdventurePackages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer faqModal={faqModal} toggleFaqModal={toggleFaqModal} />
    </>
  );
}

export default App;
