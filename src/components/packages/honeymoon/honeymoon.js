import couple from '../../../assets/couple.jpeg'
import hand_hold from '../../../assets/hand_hold.jpeg'
import ring_exchange from '../../../assets/ring_exchange.jpeg'
import facing_each_other from '../../../assets/facing_each_other.jpeg'

function Honeymoon() {
    return (
        <>
            <div id="honeymoon-container" className="flex flex-col">
                <div className="flex justify-center items-center h-32">
                    <div className="text-5xl font-light text-indigo-700 tracking-widest">
                        HoneyMoon
                    </div>
                </div>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="backdrop-blur-sm p-8 rounded-full">
                        <p className="text-8xl text-red-800 tracking-widest"> Destination</p>
                        <p className="text-white font-normal text-3xl tracking-widest">A Romantic Retreat in Nature's Embrace</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl mt-10">
                    <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                        <img src={couple} alt="Honeymoon Couple" className='w-full rounded-full max-h-[26rem] object-cover object-top' />
                    </div>
                    <div className="flex basis-1/2 justify-center items-center text-5xl text-center text-blue-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                        Escape To the Perfect Honeymoon Destination for Couples
                    </div>
                </div>
                <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl mt-10">
                    <div className="flex basis-1/2 justify-center items-center text-center  p-5 md:mt-5 lg:mt-0 lg:py-0">
                        <div className='p-12'>
                            <p className='text-5xl text-center text-red-700 mb-3'>
                                HoneyMoon and Wedding
                            </p>
                            <p>
                                Any foreigner in the verge of getting married or in a lookout to celebrate honeymoon in Bhutan we the Travel Finder Tours family would like to congratulate both the bride and groom for the prosperous future ahead.
                            </p>
                        </div>
                    </div>
                    <div className='basis-1/2 lg:mr-8 flex justify-center items-center sm:order-first lg:order-last'>
                        <img src={hand_hold} alt="Honeymoon Couple" className='w-full rounded-full max-h-[26rem] object-cover object-top' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="pt-16 pb-8 text-4xl font-semibold"> Honeymoon or Wedding Ceremony</h1>
                </div>
                <div className='shadow-xl'>
                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 mt-10">
                        <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                            <img src={ring_exchange} alt="Honeymoon Couple" className='w-full max-h-[26rem] object-cover object-center' />
                        </div>
                        <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 md:mt-5 lg:mt-0 lg:py-0 leading-6">
                            Whether you choose to have a romantic honeymoon or a remarkable wedding ceremony, Bhutan offers a unique and captivating experience that will create cherished memories to last life time.
                            Bhutan is a beautiful destination with stunning culture and emphasis on happiness and well-being. Bhutan is undoubtedly one of the idlest destinations for couples looking to have a unique and unforgettable wedding experience.
                        </div>
                    </div>

                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 mt-10">
                        <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 md:mt-5 lg:mt-0 lg:py-0 leading-6">
                            Embark on a once in a life time journey to the enchanting Kingdom of Bhutan, where one will celebrate your love, exchange vows, and create unforgettable memories. For honeymooners seeking a peaceful and intimate escape, Bhutan provides the perfect backdrop. The country’s pristine natural beauty, snow capped mountains, lush valleys, and dense forests create a serene environment that is ideal for romance.
                        </div>
                        <div className='basis-1/2 lg:mr-8 flex justify-center items-center sm:order-first lg:order-last'>
                            <img src={facing_each_other} alt="Honeymoon Couple" className='w-full max-h-[26rem] object-cover object-center' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Honeymoon;