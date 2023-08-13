import { Link } from 'react-router-dom';

function HoneymoonModal({ honeyMoonModal, toggleHoneyMoonModal }) {

    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
            toggleHoneyMoonModal()
        }
    }
    return (
        <>
            <div
                onClick={handleModalClick}
                className={`${honeyMoonModal ? 'hidden' : ''} flex-none top-0 left-0 absolute flex justify-center items-center z-10 w-full h-full backdrop-blur`}>
                <div className="bg-white rounded-lg shadow h-fit max-w-2xl">
                    <div className="flex justify-center items-center p-4 shadow">
                        <h3 className="flex-grow text-center text-xl font-semibold text-gray-900">
                            HoneyMoons and Weddings
                        </h3>
                        <button type="button" onClick={() => {
                            toggleHoneyMoonModal()
                        }}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-12 py-4 max-h-[28rem] md:max-h-[37rem] overflow-auto text-center bg-neutral-50">
                        <p className='shadow p-4'>
                            Any foreigner in the verge of getting married or in a lookout to celebrate honeymoon in Bhutan we the Travel Finder Tours family would like to congratulate both the bride and groom for the prosperous future ahead.<br /><br />
                            Whether you choose to have a romantic honeymoon or a remarkable wedding ceremony, Bhutan offers a unique and captivating experience that will create cherished memories to last life time.<br /><br />
                            Bhutan is a beautiful and unique destination, known for its stunning landscapes, rich culture, and emphasis on happiness and well – being. Bhutan is undoubtedly one of the idlest destinations for couples looking to have a unique and unforgettable wedding experience.<br /><br />
                            Embark on a once in a life time journey to the enchanting Kingdom of Bhutan, where one will celebrate your love, exchange vows, and create unforgettable memories. For honeymooners seeking a peaceful and intimate escape, Bhutan provides the perfect backdrop. The country’s pristine natural beauty, snow capped mountains, lush valleys, and dense forests create a serene environment that is ideal for romance.<br /><br />
                            To enhance your romantic experience, Bhutan offers a range of luxurious accommodations, including boutique hotels and resorts that blend seamlessly with the natural surroundings. Should one plane to get married in Bhutanese way, wedding ceremony are often accompanied by vibrant traditional music, dance performances, and elaborate feasts. It is important to note that arranging a traditional Bhutanese wedding requires careful planning and coordination with local authorities thus advance booking is highly recommended.
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

export default HoneymoonModal;