import AboutUsCard from "./about_us_card";
import Navbar from "../navbar";
import HoveringButton from '../hovering_button';

function AboutUs() {
    return (
        <>
            <div id="image-container" className='flex flex-col'>
                <Navbar />
                <div className='flex flex-grow items-center justify-center'>
                    < AboutUsCard />
                </div>
                < HoveringButton />
            </div>
        </>
    )
}

export default AboutUs;