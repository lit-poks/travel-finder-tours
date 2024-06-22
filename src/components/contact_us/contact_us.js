import Navbar from "../navbar";
import ContactUsCard from "./contact_us_card";
import ContactInUsCard from "./contact_in_us_card";
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
            <div id="image-container" className='flex flex-col '>
                <Navbar />
                <div className='flex-grow flex flex-col lg:flex-row justify-evenly items-center'>
                        <div className="pt-4 lg:p-2 md:pt-0 flex justify-center items-center">
                            <ContactUsCard modalHidden={modelHidden} hideModal={hideModal}/>
                        </div>
                        <div className="pt-4 p-2 md:pt-0 flex justify-center items-center">
                            <ContactInUsCard/>
                        </div>
                </div>
                < MapModal modalHidden={modelHidden} hideModal={hideModal}/>
            </div>
        </>
    )
}

export default ContactUs;