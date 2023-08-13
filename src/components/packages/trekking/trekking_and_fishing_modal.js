import { Link } from "react-router-dom"


function TrekkingAndFishingModal({ trekkingAndFishingModal, toggleTrekkingAndFishingModal }) {

    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
            toggleTrekkingAndFishingModal()
        }
    }

    return (
        <>
            <div
                onClick={handleModalClick}
                className={`${trekkingAndFishingModal ? 'hidden' : ''} flex-none top-0 left-0 absolute flex justify-center items-center z-10 w-full h-full backdrop-blur`}>
                <div className="bg-white rounded-lg shadow h-fit max-w-2xl">
                    <div className="flex justify-center items-center p-4 shadow">
                        <h3 className="flex-grow text-center text-xl font-semibold text-gray-900">
                            Trekking and Fishing Tours
                        </h3>
                        <button type="button" onClick={() => {
                            toggleTrekkingAndFishingModal()
                        }}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-12 py-4 max-h-[28rem] md:max-h-[37rem] overflow-auto text-center bg-neutral-50">
                        <div className="shadow p-3">
                            <h1 className="text-xl font-bold pb-3">Trekking</h1>
                            <p className="">
                                We welcome you to the mystical and enchanting kingdom of Bhutan. Trekking in Bhutan is usually best undertaken during the spring (March to May) and autumn (September to November) seasons when the weather is favorable, and the skies are clear.<br /><br />
                                Bhutan, nestled in the eastern Himalayas, offers a truly unique experience for trekkers with its pristine nature, rich cultural heritage, and warm hospitality. Trekking in Bhutan may vary from one to another depending on the route chosen, ranging from a few days to a couple of weeks. All trekking expeditions are accompanied by experienced local guides and support staff that will ensure your safety and provide insights into Bhutanese culture and traditions.<br /><br />
                                Trekking enthusiast can prepare oneself for an incredible trekking adventure through breathtaking landscapes, ancient monasteries, and remote villages.  For those seeing a more off the beaten path adventure, the Snowman trek is renowned as one of the most difficult and rewarding treks in the world. Trekking in Bhutan offers a chance to witness the country’s incredible biodiversity.<br /><br />
                            </p>
                        </div>
                        <div className="shadow p-3">
                            <h1 className="text-xl font-bold py-3">Fishing</h1>
                            <p>
                                Situated in the spectacular landscapes of the Himalayas, the land of happiness, Bhutan offers a unique and unforgettable fishing experience. It is also known for its rich biodiversity, commitment to environmental conservation and its focus on Gross National Happiness.<br /><br />
                                With its crystal clear rivers and serene lakes, this enchanting kingdom is a haven for anglers seeking tranquility and the thrill of reeling in a prized catch. Whether you are an angler or a beginner, Bhutan’s abundant waters teem with various species of trout, catfish, and Masheer, promising a rewarding adventure for all.<br /><br />
                                Immerse yourself in the untouched beauty of Bhutan’s nature as you cast your line against the backdrop of majestic mountains and lush green valleys.<br /><br />
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-4 shadow-inner ">
                        <Link to='/contact-us' type="button"
                            className="flex font-extrabold items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-6 py-2.5 text-center">
                            Book a Slot Now!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrekkingAndFishingModal