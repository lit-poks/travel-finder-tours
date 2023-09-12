import Footer from "../../footer";
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
                        Honeymoon
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
                                Honeymoon and Wedding
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

                    <div className="flex items-center justify-center">
                        <h1 className="pt-16 pb-8 text-4xl font-semibold">The Honeymoon Package</h1>
                    </div>

                    {/* HoneyMoon Package */}
                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                        <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                            <img src={hand_hold} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                        </div>


                        <div className="basis-1/2 flex flex-col">
                            <div className='text-center p-5 border-b'>
                                <h5 class="text-2xl font-bold tracking-tight text-gray-900">Honeymoon Package</h5>
                            </div>

                            <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                                <ol class="relative border-l border-gray-200">
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                        <h3 class="text-lg font-semibold text-gray-900 ">Arrival in Paro</h3>
                                        <p class="mb-4 text-base font-normal text-gray-500 ">
                                            <ul>
                                                <li>
                                                    - Traditional Bhutanese welcome ceremony.
                                                </li>
                                                <li>
                                                    - Transfer to your hotel.
                                                </li>
                                                <li>
                                                    -  Relax and acclimate to the altitude.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                        <h3 class="text-lg font-semibold text-gray-900 ">Paro Exploration</h3>
                                        <p class="text-base font-normal text-gray-500 ">
                                            <ul>
                                                <li>
                                                    - Visit Paro Taktsang (Tiger's Nest) Monastery, a famous Bhutanese landmark.
                                                </li>
                                                <li>
                                                    - Explore Rinpung Dzong, a stunning fortress and monastery.
                                                </li>
                                                <li>
                                                    - Evening at leisure in Paro.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 3</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Thimphu</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Drive to Thimphu, the capital city of Bhutan.
                                                </li>
                                                <li>
                                                    - Visit the Tashichho Dzong, the seat of Bhutan's government.
                                                </li>
                                                <li>
                                                    - Explore the Memorial Chorten.
                                                </li>
                                                <li>
                                                    - Overnight stay in Thimphu.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 4</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Thimphu Sightseeing</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Visit the National Institute for Zorig Chusum (Traditional Arts and Crafts).
                                                </li>
                                                <li>
                                                    - Explore the Folk Heritage Museum and the Textile Museum.
                                                </li>
                                                <li>
                                                    - Attend a traditional Bhutanese wedding ceremony (as per the theme).
                                                </li>
                                                <li>
                                                    - Overnight in Thimphu.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Punakha</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Drive to Punakha, the ancient capital of Bhutan.
                                                </li>
                                                <li>
                                                    - Visit Punakha Dzong, a stunning riverside fortress.
                                                </li>
                                                <li>
                                                    - Explore Chimi Lhakhang, the fertility temple.
                                                </li>
                                                <li>
                                                    - Overnight stay in Punakha.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 6</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Wangdue Phodrang</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Visit Wangdue Phodrang Dzong.
                                                </li>
                                                <li>
                                                    - Explore local markets and shops.
                                                </li>
                                                <li>
                                                    - Return to Punakha for the night.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 7</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Bumthang valley</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Drive to the picturesque Bumthang Valley.
                                                </li>
                                                <li>
                                                    - Visit the Jakar Dzong and Jambay Lhakhang.
                                                </li>
                                                <li>
                                                    - Explore the charming town of Jakar.
                                                </li>
                                                <li>
                                                    - Overnight in Bumthang.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 8</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Bumthang Exploration</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Visit Kurje Lhakhang, Tamshing Lhakhang, and other monasteries.
                                                </li>
                                                <li>
                                                    - Explore the beautiful valley landscapes.
                                                </li>
                                                <li>
                                                    - Enjoy a traditional Bhutanese dinner.
                                                </li>
                                                <li>
                                                    - Overnight in Bumthang.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 9</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Return to Paro</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Drive back to Paro.
                                                </li>
                                                <li>
                                                    - Free time for shopping or relaxation.
                                                </li>
                                                <li>
                                                    - Prepare for the wedding ceremony (as per the theme).
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 10</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Bhutan-Themed Wedding</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Hold your Bhutan-themed wedding ceremony in a picturesque location.
                                                </li>
                                                <li>
                                                    - Traditional Bhutanese wedding attire and rituals.
                                                </li>
                                                <li>
                                                    - Celebrate with family and friends.
                                                </li>
                                                <li>
                                                    - Overnight in Paro.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 11</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Honeymoon Begin</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Start your honeymoon adventure.
                                                </li>
                                                <li>
                                                    - Transfer to a luxury resort in Paro.
                                                </li>
                                                <li>
                                                    - Relax and unwind together.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 12-14</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Honeymoon Bliss</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Enjoy days of relaxation, spa treatments, and quality time together.
                                                </li>
                                                <li>
                                                    - Explore Paro at your leisure.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                    <li class="mb-10 ml-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 15</time>
                                        <h3 class="text-lg font-semibold text-gray-900">Departure</h3>
                                        <p class="text-base font-normal text-gray-500">
                                            <ul>
                                                <li>
                                                    - Transfer to Paro International Airport for your onward journey.
                                                </li>
                                                <li>
                                                    - Bid farewell to Bhutan with cherished memories.
                                                </li>
                                            </ul>
                                        </p>
                                    </li>
                                </ol>

                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Honeymoon;