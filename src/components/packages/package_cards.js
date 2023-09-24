import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CulturalTourModal from './cultural/cultural_tour_modal';
import HoneymoonModal from './honeymoon/honeymoon_modal';
import SpecialPackageModal from './special/special_package_modal';
import TrekkingAndFishingModal from './trekking/trekking_and_fishing_modal';

function PackageCards({togglePackage}) {
    const navigate = useNavigate();

    const [honeyMoonModal, setHoneyMoonModal] = useState(true);
    const [culturalTourModal, setCulturalTourModal] = useState(true);
    const [trekkingAndFishingModal, setTrekkingAndFishingModal] = useState(true);
    const [specialPackagesModal, setSpecialPackagesModal] = useState(true);

    const toggleCulturalTourModal = () => {
        // setCulturalTourModal(!culturalTourModal)
        togglePackage('Cultural', 'culturalElement')
    }

    const toggleTrekkingAndFishingModal = () => {
        // setTrekkingAndFishingModal(!trekkingAndFishingModal)
        togglePackage('Adventure', 'adventureElement')
    }

    const toggleSpecialPackagesModal = () => {
        setSpecialPackagesModal(!specialPackagesModal)
        togglePackage('None', 'None')
    }

    const toggleAdventureTours = () => {
        togglePackage('None', 'None')
        navigate('/adventure')
    }

    const toggleHoneyMoonModal = () => {
        // setHoneyMoonModal(!honeyMoonModal)
        togglePackage('Honeymoon', 'honeymoon-container')
    }
    return (
        <>
        <HoneymoonModal honeyMoonModal={honeyMoonModal} toggleHoneyMoonModal={toggleHoneyMoonModal} />
        <CulturalTourModal culturalTourModal={culturalTourModal} toggleCulturalTourModal={toggleCulturalTourModal} />
        <TrekkingAndFishingModal trekkingAndFishingModal={trekkingAndFishingModal} toggleTrekkingAndFishingModal={toggleTrekkingAndFishingModal}/>
        <SpecialPackageModal specialPackagesModal={specialPackagesModal} toggleSpecialPackagesModal={toggleSpecialPackagesModal}/>
            <div className="flex flex-grow justify-center text-white font-bold text-2xl p-2 ">
                <div id="cultural-tours"
                    onClick={toggleCulturalTourModal}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Cultural Tours
                    </h1>
                </div>
                <div id="trekking-tours"
                onClick={toggleTrekkingAndFishingModal}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Trekking Tours
                    </h1>

                </div>
            </div>
            <div className="flex flex-grow justify-center text-white font-bold text-2xl p-2">
                <div id="honeymoon-tours"
                    onClick={toggleHoneyMoonModal}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Honeymoons and Wedding
                    </h1>

                </div>
                <div id="adventure-packages"
                    onClick={toggleAdventureTours}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Adventure Tours
                    </h1>

                </div>
            </div>
        </>
    )
}

export default PackageCards;