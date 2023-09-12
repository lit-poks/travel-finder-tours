import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/about_us/about_us.js';
import ComingSoon from './components/coming_soon.js'
import ContactUs from './components/contact_us/contact_us.js';
import Homepage from './components/homepage'
import TourPackages from './components/packages/tour_packages.js';
import { inject } from '@vercel/analytics';
 
inject();


function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
