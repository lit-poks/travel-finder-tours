import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/about_us/about_us.js';
import ComingSoon from './components/coming_soon.js'
import ContactUs from './components/contact_us/contact_us.js';
import Homepage from './components/homepage'
import TourPackages from './components/packages/tour_packages.js';
import AdventurePackages from './components/packages/trekking/adventure_packages.js';


function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/adventure" element={<AdventurePackages />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
