import logo from '../assets/logo.png'

function Navbar() {
    return(
        <>
            <div className="backdrop-blur">
                    <div className="container mx-auto">
                        <div className='h-44'>
                            <div className="flex justify-between items-end h-full">
                                <button className='shadow shadow-ora shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                    Home
                                </button>
                                <button className='shadow shadow-ora shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                    Packages
                                </button>
                                <div className='shrink h-44 w-44 relative basis-60 hover:scale-110'>
                                    <img src={logo} alt="Travel Finder Tours" className='absolute' />
                                </div>
                                <button className='shadow shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                    Contact Us
                                </button>
                                <button className='shadow shrink border-2 border-ora/100 text-white w-40 h-1/4 mb-16 text-lg font-semibold hover:bg-ora hover:scale-105'>
                                    About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Navbar;