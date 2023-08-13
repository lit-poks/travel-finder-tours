import Navbar from "../navbar";
import ContactUsCard from "./contact_us_card";
import whattsapp from '../../assets/whattsapp.png';
import MapModal from "./map_modal";
import { useState } from 'react';

function ContactUs() {
    const [modelHidden, setmodelHidden] = useState(true);

    const hideModal = (value) => {
        console.log(modelHidden)
        setmodelHidden(value)
    }

    return (
        <>
            <div id="image-container" className='flex flex-col'>
                <Navbar />
                <div className='mx-auto flex-grow md:container'>
                    <div className="flex md:flex-row md:justify-center md:items-center lg:flex-row-reverse lg:justify-start h-full">
                        <div className="pt-4 md:pt-0 flex justify-center items-center">
                            <ContactUsCard modalHidden={modelHidden} hideModal={hideModal}/>
                        </div>
                    </div>
                    <a href="https://wa.me/+97517937798" target="_blank">
                        <img className="animate-pulse absolute bottom-8 left-8 h-12 rounded-full hover:scale-110 hover:animate-none" src={whattsapp} alt="Travel Finder Tours Whatts App" />
                    </a>
                </div>
                < MapModal modalHidden={modelHidden} hideModal={hideModal}/>
            </div>
        </>
    )
}

export default ContactUs;