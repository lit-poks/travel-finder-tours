import { useState } from 'react';
import Navbar from "./navbar";
import whattsapp from '../assets/whattsapp.png'
import VisionMission from "./homepage_components/vision_mission";
import IconicDestinations from "./homepage_components/iconic_destinations";
import Footer from "./footer";
import FooterModal from './footer_modal';
import Clock from './clock';

function Homepage() {
    return (
        <>
            <div className="flex flex-col">
                <div id="image-container" className="flex flex-col">
                    <Navbar />
                    <div className='flex lg:flex-grow lg:mt-0 md:mt-40 container mx-auto md:flex-col lg:flex-row'>
                        <div className='flex flex-grow flex-col justify-center lg:items-start mb-24 md:items-center md:mb-6'>
                            <div className="">
                                <div className="text-6xl text-white">
                                    <span className="text-ora">Travel </span>
                                    <span className="text-white">Finder </span>
                                    <span className="text-ora">Tours </span>
                                </div>
                                <p className="text-3xl text-grey text-center">"Absolute Happiness"</p>
                            </div>
                        </div>
                        <Clock />
                        <a href="https://wa.me/+97517937798" target="_blank">
                            <img className="animate-pulse absolute bottom-10 right-10 h-16 rounded-full hover:scale-110 hover:animate-none" src={whattsapp} alt="Travel Finder Tours Whatts App" />
                        </a>
                    </div>
                </div>
            </div>
            <VisionMission />
            <IconicDestinations />
        </>
    )
}

export default Homepage;