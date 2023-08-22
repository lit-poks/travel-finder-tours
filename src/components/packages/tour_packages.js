import Navbar from "../navbar";
import whattsapp from '../../assets/whattsapp.png'
import PackageCards from "./package_cards";
import CulturalItenaries from "./cultural/cultural_itenaries";


function TourPackages() {
    return (
        <>
            <div id="image-container" className='flex flex-col'>
                <Navbar />
                <div className="flex flex-col flex-grow">
                    < PackageCards />
                </div>
                <a href="https://wa.me/+97517937798" target="_blank">
                    <img className="animate-pulse absolute bottom-10 right-10 h-16 rounded-full hover:scale-110 hover:animate-none" src={whattsapp} alt="Travel Finder Tours Whatts App" />
                </a>
            </div>
            <CulturalItenaries />
        </>
    )
}

export default TourPackages;