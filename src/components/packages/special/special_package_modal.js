import { Link } from "react-router-dom"

function SpecialPackageModal({ specialPackagesModal, toggleSpecialPackagesModal }) {

    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
            toggleSpecialPackagesModal()
        }
    }

    return (
        <>
            <div
                onClick={handleModalClick}
                className={`${specialPackagesModal ? 'hidden' : ''} flex-none top-0 left-0 absolute flex justify-center items-center z-10 w-full h-full backdrop-blur`}>
                <div className="bg-white rounded-lg shadow h-fit max-w-2xl">
                    <div className="flex justify-center items-center p-4 shadow">
                        <h3 className="flex-grow text-center text-xl font-semibold text-gray-900">
                            Special Packages
                        </h3>
                        <button type="button" onClick={() => {
                            toggleSpecialPackagesModal()
                        }}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-12 py-4 max-h-[28rem] md:max-h-[37rem] overflow-auto text-center bg-neutral-50">
                        <div className="text-center shadow p-3">
                            <h1 className="text-xl font-bold pb-3">SDF Incentives Scheme</h1>
                            <p>
                                Bhutan aims to attract visitors who truly  value the country’s unique cultural and natural heritage and are willing to contribute to its preservation. The SDF fee helps ensure that Bhutan does not experience mass tourism maintaining a balance that minimizes possible negative impacts on the environment and culture.<br /><br />
                                The fund generated from the SDF is utilized to support Bhutan’s development efforts, particularly in areas such as education, healthcare, infrastructure, and conversation projects. As tourism is secound higest income generator, Bhutan objective is to enhance the well being of its people. Bhutan places utmost importance on preserving its pristine environment and unique culture traditions.<br /><br />
                            </p>
                            <p className="text-center">
                                New incentive travel plan has be introuduced mainly to encourage long stay visits and is valid till <strong>December,2024</strong>. The incentives travel plan comes in three types:
                            </p>
                        </div>
                        <div className="text-center shadow-lg p-4 mt-2">
                            <h1 className="text-xl font-bold py-3">8Nights|9Days (4+4)</h1>
                            <p>
                                Pay the SDF of $200 per night, per person, for the first four nights, and receive up to four additional nights without the daily levy.
                            </p>
                        </div>

                        <div className="text-center shadow-lg p-4 mt-2">
                            <h1 className="text-xl font-bold py-3">14Nights|15Days (7+7)</h1>
                            <p>
                                Pay the SDF of $200 per night, per person, for the first seven nights, and receive up to seven additional nights without the daily levy.
                            </p>
                        </div>

                        <div className="text-center shadow-lg p-4 mt-2">
                            <h1 className="text-xl font-bold py-3">30Nights|31Days (12+18) </h1>
                            <p>
                                Pay the SDF of $200 per night, per person, for the first twelve nights, and receive up to 18 additional nights without the daily levy.
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

export default SpecialPackageModal;