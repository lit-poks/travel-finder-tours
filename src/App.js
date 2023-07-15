import logo from './assets/logo.png'
import bgImg from './assets/punakha_dzong.jpeg'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';


function App() {

  const sendMail = () => {
    window.location.href = "mailto:vijayed7@gmail.com";    
  }

  return (
    <>
    <div className='landing'>
        <div className='flex justify-between'>
          <img src={logo} alt="" width={150}/>
          <div className='invisible gap-8 lg:visible flex items-center px-4'>
            <div className='flex gap-2 cursor-pointer'>
              <FaFacebook color='blue' size={20} />
              <a className='text-white' href='https://www.facebook.com/profile.php?id=100088179842340&mibextid=LQQJ4d' target='_blank'>Facebook</a>
            </div>
            <div className='flex gap-2 cursor-pointer'>
              <FaInstagram color='#E1306C' size={20} />
              <a className='text-white' href='https://instagram.com/travel_finder_tours?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>Instagram</a>
            </div>
            <div className='flex gap-2 cursor-pointer'>
              <FaTiktok color='#ff0050' size={20} />
              <a className='text-white' href='http://www.tiktok.com/@travelfindertours_bhutan' target='_blank'>Tiktok</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-32">
          <div className="flex flex-col">
            <div className="h-fit text-center p-5 text-white flex flex-col gap-7">
              <p className="font-roberto text-2xl sm:text-6xl text-yellow-400 tracking-wide font-bold"> Travel Finder Tours </p>
              <p className="font-roberto text-3xl text-lime-400 tracking-wide"> "Travel beyond boundaries, broaden your horizons" </p>
            </div>
            <div className="h-fit text-center mt-10">
              <p className="font-usui text-3xl text-white"> Coming Soon </p>
            </div>
            <div className="h-fit text-center p-5 mt-10">
              <button onClick={sendMail} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default App;
