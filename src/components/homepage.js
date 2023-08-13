import Navbar from "./navbar";
import whattsapp from '../assets/whattsapp.png'

function Homepage() {
    return (
        <>
            <div id="image-container" className="flex flex-col">
                <Navbar />
                <div className='flex flex-grow container mx-auto'>
                    <div className='flex flex-grow flex-col justify-center items-start mb-24'>
                        <div className="">
                            <div className="text-6xl text-white">
                                <span className="text-ora">Travel </span>
                                <span className="text-white">Finder </span>
                                <span className="text-ora">Tours </span>
                            </div>
                            <p className="text-3xl text-grey text-center">"Absolute Happiness"</p>
                        </div>
                    </div>
                    <a href="https://wa.me/+97517937798" target="_blank">
                        <img className="animate-pulse absolute bottom-10 right-10 h-16 rounded-full hover:scale-110 hover:animate-none" src={whattsapp} alt="Travel Finder Tours Whatts App" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Homepage;