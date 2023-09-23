import fishing_main from '../../../assets/fishing_main.jpeg'
import fishing_first from '../../../assets/fishing_first.jpeg'

function FishingItenaries() {
    return (
        <div id='fishingElement' className="flex flex-col">
            <div id="fishing-container" className="flex flex-col">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="backdrop-blur-sm p-8 rounded-full">
                        <p className="text-8xl text-red-800 tracking-widest"> Fishing </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl mt-10">
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                    <img src={fishing_first} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-bottom' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                    Fishing in Bhutan offers a captivating blend of natural beauty, cultural immersion, and angling adventure. The kingdom's rivers, like the Paro Chhu, Mo Chhu, and numerous tributaries of the Punatsangchhu River, serve as pristine settings for this unique experience. Bhutan's commitment to environmental preservation ensures these waterways remain unpolluted and untouched, providing anglers with crystal-clear waters and breathtaking mountain landscapes as their backdrop.<br/><br/>

                    One of the highlights of fishing in Bhutan is the opportunity to catch a variety of fish species, with the brown trout and the elusive golden mahseer being the most sought-after. The thrill of casting your line into these pristine rivers and the excitement of landing a prized catch make Bhutan an angler's paradise.
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl my-10">
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                    Bhutan's fishing packages typically include the services of experienced local guides who possess an intimate knowledge of the best fishing spots, local fishing regulations, and safety measures. These guides not only enhance your chances of a successful fishing trip but also share their insights into Bhutanese culture and traditions.<br/><br/>

                    To maintain the ecological balance of the rivers, Bhutan emphasizes sustainable practices, promoting catch-and-release. This responsible approach not only preserves fish populations but also ensures that future generations can continue to enjoy the natural beauty of Bhutan's rivers.
                </div>
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center sm:order-first lg:order-last'>
                    <img src={fishing_main} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-bottom' />
                </div>
            </div>
        </div>
    )
}

export default FishingItenaries;