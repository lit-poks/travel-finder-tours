import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <>
            <div className="backdrop-blur">
                <div className="sm:px-4 lg:container lg:mx-auto">
                    <div className='flex flex-col h-44'>
                        <div className='flex justify-between'>
                            <div>
                                <i className="iconoir-pin-alt mr-2"></i> Travel Finder Tours, Pink Building, Ground Floor, Lamgong,Paro
                            </div>
                            <div>
                                <a className='pr-3' href="tel:+97517937798" target='_blank'>
                                    <i className="iconoir-phone-outcome mr-2"></i> +975-17937798 ||
                                </a>
                                <a className='' href="mailto:travelfindertours7@gmail.com" target='_blank'>
                                    <i className="iconoir-send-mail mr-2 text-lg"></i> travelfindertours7@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-grow justify-between items-end h-full">
                            <Link to='/' className='flex justify-center items-center shadow shadow-ora shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                Home
                            </Link>
                            <Link to='/packages' className='flex justify-center items-center shadow shadow-ora shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                Packages
                            </Link>
                            <div className='shrink h-44 w-44 relative basis-60 hover:scale-110'>
                                <img src={logo} alt="Travel Finder Tours" className='absolute' />
                            </div>
                            <Link to='/contact-us' className='flex justify-center items-center shadow shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                Contact Us
                            </Link>
                            <Link to='/about-us' className='flex justify-center items-center shadow shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;