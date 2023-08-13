import { Link } from 'react-router-dom';

function CulturalTourModal({ culturalTourModal, toggleCulturalTourModal }) {

    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
            toggleCulturalTourModal()
        }
    }
    return (
        <>
            <div
                onClick={handleModalClick}
                className={`${culturalTourModal ? 'hidden' : ''} flex-none top-0 left-0 absolute flex justify-center items-center z-10 w-full h-full backdrop-blur`}>
                <div className="bg-white rounded-lg shadow h-fit max-w-2xl">
                    <div className="flex justify-center items-center p-4 shadow">
                        <h3 className="flex-grow text-center text-xl font-semibold text-gray-900">
                            Cultural Tours
                        </h3>
                        <button type="button" onClick={() => {
                            toggleCulturalTourModal()
                        }}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-12 py-4 max-h-[28rem] md:max-h-[37rem] overflow-auto text-center bg-neutral-50">
                        <p className='shadow p-4'>
                            Embark on a cultural tour of Bhutan and immerse yourself in the unique traditions, customs, and spiritual practices that have been preserved for centuries.<br /><br />
                            Bhutan, also known as the kingdom of Bhutan, is a landlocked country located in the Eastern Himalayas in South Asia. Bhutanese culture is deeply rooted in the country’s rich Buddhist heritage, which has shaped its traditions, customs, and way of life. Bhutan is popularly referred to as the land of happiness and is renowned for its cultural heritage and breathtaking landscapes.<br /><br />
                            Buddhism is the predominant religion in Bhutan, and it plays a central role in the daily lives of the Bhutanese people. While surfing through Bhutan one will know Gross National Happiness and it’s the unique development philosophy, which prioritizes the overall well-being and happiness of its citizens over material wealth.<br /><br />
                            Visiting Bhutan for cultural tour offers you diverse experiences. The very first thing one will notice is Bhutanese architecture and it is characterized by its unique traditional style known as “Dzong architecture.” Dzongs are fortress like structures that serve as an administrative centers, monasteries, and religious institutions. These buildings are constructed without the use of nails and features intricate woodwork, vibrant paintings, and large courtyards.<br /><br />
                            Respect of Nature is a speciality and the core of Bhutanese culture. Bhutan is known for its commitment to environmental conservation and its dedication to maintaining a pristine nature environment. The country has set aside a significant portion of its land as protected areas, and the government and preserving the country’s biodiversity.<br /><br />
                            Bhutanese culture is deeply intertwined with spirituality, nature, and the pursuit of happiness. The Bhutanese people take great pride in their unique cultural heritage and strive to preserve and promote it in the face of modernization.
                        </p>
                    </div>
                    <div className="flex justify-center items-center p-4 shadow-inner ">
                        <Link to='/contact-us' type="button"
                            className="flex font-extrabold items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-6 py-2.5 text-center">

                            Plan Now

                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CulturalTourModal