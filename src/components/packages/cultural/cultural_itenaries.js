import cham from '../../../assets/cham.jpeg'
import painting from '../../../assets/painting.jpeg'
import mountain_fest from '../../../assets/mountain_fest.jpeg'
import little_girl from '../../../assets/little_girl.jpeg'
import crowd from '../../../assets/crowd.jpeg'

function CulturalItenaries() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center">
                <h1 className="pt-16 pb-8 text-4xl font-semibold"> Know Your Itenaries</h1>
            </div>

            {/* 4 N 5 D */}
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={painting} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                </div>


                <div className="basis-1/2 flex flex-col">
                    <div className='text-center p-5 border-b'>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900">4 Nights | 5 Days</h5>
                    </div>

                    <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Arrival in Paro Airport</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 ">
                                    Welcome by our office representative, Thimphu Sightseeing - On arrival check in at the hotel. After lunch Thimphu sightseeing includes; Tashichho Dzong and presently serves as a seat of the national government and the Central Monastic Body. Buddha Point a place for refreshing with a world tallest sitting Buddha on the top of the Kuensel Phodrang, Memorial Chorten - Evening take a stroll nearby places. Overnight stay at Thimphu.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Capital Sightseeing – Whole day</h3>
                                <p class="text-base font-normal text-gray-500 ">
                                    After breakfast – Drive to Dochula pass situated at 3150 m is the highest point between Thimphu and Punakha. Lunch will be served in Thimphu Afternoon - visit Sangaygang View Point, Changangkha Lhakhang, and Takin Preserve Centre (Mini zoo) later visit - Tashichho Dzong. Overnight stay at, Thimphu.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 3</time>
                                <h3 class="text-lg font-semibold text-gray-900">Further drive to Paro</h3>
                                <p class="text-base font-normal text-gray-500">
                                    After breakfast - drive to Paro enjoying the road scenery and settlement nearby road. Stop and hike to Tachog Monastery walking over 600 years old Iron Bridge. There are many stories and myth connected to the place and your guide shall help you get the details of the place. Later visit - Ta Dzong presently serves as the national museum and followed by Rinpung Dzong - Meaning "fortress of the heap of jewels". Evening take a walk nearby settlements/ in and around Paro town. Overnight stay at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 4</time>
                                <h3 class="text-lg font-semibold text-gray-900">Taktsang Hike</h3>
                                <p class="text-base font-normal text-gray-500">
                                    After breakfast hike up to the famous Taktsang Monastery - called “Tiger's Nest” - visit Kichu Monastery while returning hotel. However, should time permit visit Drukgyel Dzong and Dumtseg Lhakhang. In the evening experience Bhutanese hot stone bath (Supplement is required); which is sometime known as the traditional water therapy and help ease joint pain and muscles cramp.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                <h3 class="text-lg font-semibold text-gray-900">Departure (Farewell)</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Depending on the flight schedule check out from the hotel - drop at Paro Airport for your onward destination.
                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>

            {/* 5 N 6 D */}
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={mountain_fest} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                </div>


                <div className="basis-1/2 flex flex-col">
                    <div className='text-center p-5 border-b'>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900">5 Nights | 6 Days</h5>
                    </div>

                    <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Arrival in Paro Airport</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 ">
                                    On arrival at paro airport – welcome by our office representative and transfer to Thimphu - hotel check in. In the evening explore the Thimphu town by walk and make sure you don’t stay too late outside.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Capital Sightseeing - Whole day</h3>
                                <p class="text-base font-normal text-gray-500 ">
                                    After breakfast, Drive to Dochula pass situated at 3150 m is the highest point between Thimphu and Punakha. Lunch will be served in Thimphu Afternoon - visit Sangaygang View Point, Changangkha Lhakhang, and Takin Preserve Centre (Mini zoo) later visit - Tashichho Dzong. Overnight stay at, Thimphu.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 3</time>
                                <h3 class="text-lg font-semibold text-gray-900">Drive to Punakha</h3>
                                <p class="text-base font-normal text-gray-500">
                                    On the way to Punakha, stop at Dochula for a cup of tea and take pleasure of the view.  Indeed Dochula is the top point between Thimphu and Punakha. It has a spectaculars view of the higher Himalayas. Reach at Lobesa - a short hike to Chimi Lhakhang. Later visit Punakha Dzong.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb- text-sm font-normal leading-none text-gray-400">Day 4</time>
                                <h3 class="text-lg font-semibold text-gray-900">Return back to Paro</h3>
                                <p class="text-base font-normal text-gray-500">
                                    After breakfast drive back to paro. on the way stop at Lamperi to visit royal botanical park - the park contains a rich biodiversity of flora and fauna and features a huge species of plants and animals including endangered species.  Lunch will be served at Thimphu. Upon arrival at paro – hotel check-in.  Later visit - Ta Dzong presently serves as the national museum.   Also visit - Rinpung Dzong - meaning "fortress of the heap of jewels". Evening take a walk nearby settlements/ in and around the town.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                <h3 class="text-lg font-semibold text-gray-900">Famous Taktsang hike (full day)</h3>
                                <p class="text-base font-normal text-gray-500">
                                    After breakfast - visit Taktsang monastery - called “tiger's nest. Lunch will be served nearby Taktsang based. Later in the evening visit Kichu monastery; one of the 108th monastery built by the Tibetan king Songtsen Goenpo, head to the farm house - hot stone bath (traditional). There is a Bhutanese believe - visiting Taktsang is considered lucky for the unseen future ahead.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 6</time>
                                <h3 class="text-lg font-semibold text-gray-900">Farewell – Departure</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Depending on the flight schedule, our representative shall help you with the hotel check out – and drop you to the airport for your onward destination.
                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>

            {/* 6 N 7 D */}
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={little_girl} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                </div>


                <div className="basis-1/2 flex flex-col">
                    <div className='text-center p-5 border-b'>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900">6 Nights | 7 Days</h5>
                    </div>

                    <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Arrival in Paro Airport</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 ">
                                    Arrival at Paro International airport, meeting & assistance on arrival and transfer to Hotel. Evening take a stroll around Paro market and town. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Paro Sightseeing</h3>
                                <p class="text-base font-normal text-gray-500 ">
                                    Morning visit Drukgyel Dzong, often known as victory Dzong as it was built to mark victory over several Tibetan invasions. On a clear day, witness the spectacular view of Mt. Jomolhari. Later visit Ta Dzong (Watch Tower) presently serves as National Museum and walk downs the trail to visit Rinpung Dzong. Evening sightseeing by cycle (Mountain bike) – Visit Dumtseg Lhakhang| Kyichu Lhakhang, one of the oldest and most sacred shrines of the Kingdom and return to town for evening walk around town. Dinner will be served in the hotel. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 3</time>
                                <h3 class="text-lg font-semibold text-gray-900">Paro - Thimphu </h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning drive to Thimphu en route visit Semtokha Dzong, the oldest fortress of the Kingdom which now houses the school for religious and cultural studies. Afternoon free for shopping and leisure. Night halt at Thimphu.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb- text-sm font-normal leading-none text-gray-400">Day 4</time>
                                <h3 class="text-lg font-semibold text-gray-900">Thimphu</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning drive to BBS Tower for fascinating view of Thimphu valley and later visit mini zoo, Anim Dratshang (nunnery), National Library, Handmade Paper factory & Memorial Chorten (stupa). Afternoon, if time permits, visit to School of Arts & Crafts, Textile & Folk Heritage Museum, Zangtho Pelri Lhakhang (Temple) and Handicrafts Emporium.  Night halt at Thimphu.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                <h3 class="text-lg font-semibold text-gray-900">Thimphu - Punakha</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning drive to Punakha taking a short stop at Dochula pass (3,080m) that heralds the most enchanting views of Bhutan allowing the visitor’s to witness the stunning  eastern Himalayas. Afternoon visit Punakha Dzong and Suspension bridge to check out the beautiful valley view. Evening free in Fascinating Punakha valley. Night halt at Punakha.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 6</time>
                                <h3 class="text-lg font-semibold text-gray-900">Punakha - Paro </h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning hike up to Khamsum Yulley Namgyal Chorten and later drive to Paro. Evening one hour cultural program (Bhutanese Festival); comprises of 6 – 10 items and they are also shown during festival time. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 7</time>
                                <h3 class="text-lg font-semibold text-gray-900">Departure/Farewell</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Depending on the flight schedule Morning transfer to the airport for flight to onward destination
                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>

            {/* 7 N 8 D */}
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={crowd} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                </div>


                <div className="basis-1/2 flex flex-col">
                    <div className='text-center p-5 border-b'>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900">7 Nights | 8 Days</h5>
                    </div>

                    <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Arrive at Paro International airport</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 ">
                                    Meeting & assistance on arrival and transfer to designated Hotel. Evening take a short stroll nearby hotel. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Paro Sightseeing</h3>
                                <p class="text-base font-normal text-gray-500 ">
                                    Morning visit Drukgyel Dzong meaning victory fortress from where Bhutanese repelled several Tibetan invasion. On a clear day, there is splendid view of Mt. Jomolhari from the approach road to this Dzong. Later visit Ta Dzong (National Museum) and walk down the trail to visit Rinpung Dzong, the fortress which has a long and fascinating history. Evening visit Kyichu Lhakhang, one of the oldest and most sacred shrines of the Kingdom. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb- text-sm font-normal leading-none text-gray-400">Day 3</time>
                                <h3 class="text-lg font-semibold text-gray-900">Thimphu</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning drive to Thimphu en route visit Semtokha Dzong, the oldest fortress of the Kingdom which now houses the school for religious and cultural studies. Afternoon free for shopping and leisure. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 4</time>
                                <h3 class="text-lg font-semibold text-gray-900">Wholeday Thimphu Sightseeing</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning drive to BBS Tower for fascinating view of Thimphu valley and later visit mini zoo, Anim Dratshang (nunnery), National Library, Handmade Paper factory & Memorial Chorten (stupa). Afternoon, as the time permits, visit to School of Arts & Crafts, Textile & Folk Heritage Museum, Zangtho Pelri Lhakhang (Temple) and Handicrafts Emporium. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                <h3 class="text-lg font-semibold text-gray-900">Thimphu - Punakha</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning drive to Punakha taking a short stop at Dochula pass that heralds the most enchanting views of Bhutan. Afternoon visit Punakha Dzong and Khamsum Yulley Namgyal Chorten. Evening free in Fascinating Punakha valley. Overnight Damchen Resort or Similar.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 6</time>
                                <h3 class="text-lg font-semibold text-gray-900">Rafting along Punatshang Chhu</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning transfer to the rafting site for rafting experience. Wangduephodrang visiting Dzong and local market. The district of Wangduephodrang is also famous for its bamboo products, slate and stone carvings. Overnight Damchen Resort or Similar.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 7</time>
                                <h3 class="text-lg font-semibold text-gray-900">Punakha - Paro</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Morning transfer to Paro. Afternoon visit to Paro market and a traditional farm house. Overnight Tenzinling Resort or Similar.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 8</time>
                                <h3 class="text-lg font-semibold text-gray-900">Departure/Farewell</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Depending on the flight schedule our representative will escort you to the airport for your onward flight destination.
                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CulturalItenaries;