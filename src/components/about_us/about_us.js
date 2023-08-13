import AboutUsCard from "./about_us_card";
import Navbar from "../navbar";
import whattsapp from '../../assets/whattsapp.png'

function AboutUs() {
    return (
        <>
            <div id="image-container" className='flex flex-col'>
                <Navbar />
                <div className='flex flex-grow items-center justify-center'>
                    < AboutUsCard />
                </div>
                <a href="https://wa.me/+97517937798" target="_blank">
                    <img className="animate-pulse absolute bottom-8 left-8 h-12 rounded-full hover:scale-110 hover:animate-none hover:drop-shadow" src={whattsapp} alt="Travel Finder Tours Whatts App" />
                </a>
            </div>
        </>
    )
}

export default AboutUs;