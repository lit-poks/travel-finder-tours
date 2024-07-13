import { useEffect, useState } from 'react';
import Navbar from "../navbar";
import PackageCards from "./package_cards";
import HoveringButton from '../hovering_button';
import CulturalItenaries from "./cultural/cultural_itenaries";
import AdventureIteneries from "./trekking/adventure_iteneries";
import Honeymoon from "./honeymoon/honeymoon";
import Luxury from "./luxury/luxury_tours";


function TourPackages() {
    const [currentPage, setcurrentPage] = useState('None');
    const [currentEle, setcurrentEle] = useState('None');

    useEffect(()=> {
        if(currentEle == 'None') return

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
                    < PackageCards togglePackage={togglePackage}/>
                </div>
                < HoveringButton />
            </div>
            {
                currentPage == 'Cultural' && <CulturalItenaries />
            }
            {
                currentPage == 'Adventure' && <AdventureIteneries />
            }
            {
                currentPage == 'Honeymoon' && <Honeymoon />
            }
            {
                currentPage == 'Luxury' && <Luxury />
            }
        </>
    )
}

export default TourPackages;