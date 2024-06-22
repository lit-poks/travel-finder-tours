import { lazy, useState } from 'react';
import { useEffect } from 'react';
import { Suspense } from 'react';
import Navbar from "./navbar";
import HoveringButton from './hovering_button';
import VisionMission from "./homepage_components/vision_mission";
import Footer from "./footer";
import FooterModal from './footer_modal';
import Clock from './clock';

const IconicDestinations = lazy(() => import("./homepage_components/iconic_destinations"));

function Homepage() {
    const [showSlider, setShowSlider] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Start the slide-out animation
            setAnimationClass('slide-out-left');
            
            // After the slide-out animation, switch the class and start the slide-in animation
            setTimeout(() => {
                setShowSlider((prev) => (prev + 1) % 2);
                setAnimationClass('slide-in-right');

                // Remove the animation class after the slide-in animation completes
                setTimeout(() => {
                    setAnimationClass('');
                }, 1000); // Duration of slide-in animation
            }, 1000); // Duration of slide-out animation
        }, 10000); // Time between slides

        return () => clearTimeout(timeout);
    }, [showSlider]);

    return (
        <>
            <div className="">
                <div id="holo" className={`homepage-container-${showSlider} flex flex-col ${animationClass}`}>
                    <Navbar />
                </div>

                < HoveringButton />
            </div>
            {/* <VisionMission /> */}
            <IconicDestinations/>
        </>
    )
}

export default Homepage;

// Code for Text in the main image
{/* <div className='flex flex-grow flex-col justify-center lg:items-start mb-24 md:items-center md:mb-6'>
                            <div className="md:">
                                <div className="text-6xl text-white md:mt-[430px] md:pl-12 lg:pl-20 lg:mt-48 xl:mt-80">
                                    <span className="lg:text-gre md:text-gre">Travel </span>
                                    <span className="lg:text-ora md:text-ora">Finder </span>
                                    <span className="lg:text-gre md:text-gre">Tours </span>
                                </div>
                                <p className="text-3xl text-center lg:text-gre sm:text-gre">"Absolute Happiness"</p>
                            </div>
                        </div>
                        <Clock /> */}