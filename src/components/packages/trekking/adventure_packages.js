import Navbar from "../../navbar";
import Footer from "../../footer";
import whattsapp from '../../../assets/whattsapp.png'
import AdventureCards from "./adventure_cards";
import { useEffect, useState } from "react";
import RaftingItenaries from "./rafting_itenaries";
import BikingItenaries from "./biking_itenaries";
import FishingItenaries from "./fishing_itenaries";
import CyclingItenaries from "./cycling_itenaries";

function AdventurePackages() {
    const [currentPage, setcurrentPage] = useState('None');
    const [currentEle, setcurrentEle] = useState('None');

    useEffect(() => {
        if (currentEle == 'None') return

        const ele = document.getElementById(currentEle)
        ele.scrollIntoView()
    })

    const togglePackage = (value, selectedEle) => {
        setcurrentPage(value)
        setcurrentEle(selectedEle)
    }

    return (
        <>

            <div id="image-container" className='flex flex-col'>
                <Navbar />
                <div className="flex flex-col flex-grow">
                    <AdventureCards togglePackage={togglePackage}/>
                </div>
                <a href="https://wa.me/+97517937798" target="_blank">
                    <img className="animate-pulse absolute bottom-10 right-10 h-16 rounded-full hover:scale-110 hover:animate-none" src={whattsapp} alt="Travel Finder Tours Whatts App" />
                </a>
            </div>
            {
                currentPage == 'Rafting' && <RaftingItenaries/>
            }
            {
                currentPage == 'Biking' && <BikingItenaries/>
            }
            {
                currentPage == 'Fishing' && <FishingItenaries/>
            }
            {
                currentPage == 'Cycling' && <CyclingItenaries/>
            }
            <Footer />
        </>
    )
}

export default AdventurePackages;