import Navbar from "./navbar";
import whattsapp from '../assets/whattsapp.png'

function Homepage() {
    return (
        <>
            <div id="image-container">
                <Navbar />
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-end items-start h-96 ml-20'>
                        <div className="w-fit">
                            <p className="text-6xl text-white">Travel Finder Tours</p>
                            <p className="text-3xl text-white text-center">"Absolute Happiness"</p>
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