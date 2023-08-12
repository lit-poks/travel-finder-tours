import flight_map from '../../assets/route_map.jpeg';

function MapModal({ modalHidden, hideModal }) {

    const toggleModal = () => {
        hideModal(!modalHidden)
    }

    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
            hideModal(!modalHidden)
        }
    }

    return (
        <>
            <div
                onClick={handleModalClick}
                className={`${modalHidden ? 'hidden' : ''} flex-none fixed flex justify-center items-center z-10 w-full h-full backdrop-blur`}>
                <div className="bg-white rounded-lg shadow h-fit w-fit">
                    <div className="flex justify-center items-center p-4">
                        <h3 className="flex-grow text-center text-xl font-semibold text-gray-900">
                            Connecting Flights To Bhutan
                        </h3>
                        <button type="button" onClick={() => {
                            toggleModal()
                        }}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div >
                        <img className='max-h-[38rem]' src={flight_map} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapModal;