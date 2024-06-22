import Navbar from "../../navbar";
import Footer from "../../footer";
import HoveringButton from '../../hovering_button';
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
                < HoveringButton />
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
        </>
    )
}

export default AdventurePackages;