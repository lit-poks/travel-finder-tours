import { useEffect, useState } from 'react';
import Navbar from "../navbar";
import whattsapp from '../../assets/whattsapp.png'
import PackageCards from "./package_cards";
import CulturalItenaries from "./cultural/cultural_itenaries";
import AdventureIteneries from "./trekking/adventure_iteneries";
import Honeymoon from "./honeymoon/honeymoon";


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
                <a href="https://wa.me/+97517937798" target="_blank">
                    <img className="animate-pulse absolute bottom-10 right-10 h-16 rounded-full hover:scale-110 hover:animate-none" src={whattsapp} alt="Travel Finder Tours Whatts App" />
                </a>
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
        </>
    )
}

export default TourPackages;