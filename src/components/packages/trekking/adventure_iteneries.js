import cham from '../../../assets/cham.jpeg'
import horses from '../../../assets/horses.jpeg'
import mist from '../../../assets/mist.jpeg'
import mountain from '../../../assets/mountain.jpeg'


function AdventureIteneries() {
    return (
        <div id='adventureElement' className="flex flex-col">
            <div className="flex items-center justify-center">
                <h1 className="pt-16 pb-8 text-4xl font-semibold"> Know Your Itenaries</h1>
            </div>

            {/* 12 N 13 D Dagala Trek */}
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={horses} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                </div>


                <div className="basis-1/2 flex flex-col">
                    <div className='text-center p-5 border-b'>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900"> Dagala Trek | ( 12 Nights | 13 Days )</h5>
                    </div>

                    <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Arrive in Paro</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 ">
                                    While you are in flight, you will experience breathtaking views of Mount Everest, Kanchenjunga and other famous Himalayan peaks, including the sacred Jomolhari and Mount Jitchu Drake in Bhutan. On arrival at Paro International Airport, you will be received by our representative and escorted to your Hotel. Night halt at Paro
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Sightseeing within Paro</h3>
                                <p class="text-base font-normal text-gray-500 ">
                                    Drive to Drukgyel Dzong (a ruined fortress - 15kmm from the main Paro town) and is presently undergoing the renovation under the Royals command. This was the place that Bhutanese finally defeated the Tibetans army. From this point of place you will be able to witness Mt. Jomolhari on the clear weather. After lunch, take a leisurely stroll around the hotel compound. Visit the Rinpung Dzong. It was built in 1645 A.D. Later visit the National Museum (Ta-Dzong). This was actually the Watch Tower of the Paro Rinpung Dzong and was converted into the national Museum in 1965. Visit Kyichu Lhakhang (Monastery). The monastery was built in 659 A.D by King Songtsen Gampo of Tibet as one of the 108 such monasteries he built in across the Himalayas to spread Buddhism. Night halt Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 3</time>
                                <h3 class="text-lg font-semibold text-gray-900">Drive to the capital city, Thimphu.</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Drive to capital which takes about one and half hour from Paro. On the way visit Tamchog Lhakhang and further drive to Thimphu. Upon reaching Thimphu – hotel check in. Lunch will be served in the hotel. After lunch sightseeing in Thimphu includes; Visit Memorial Chorten, a huge stupa built in memory of the third King who reigned from 1952-1972.Visit the National Library where ancient manuscripts are preserved. Visit Tashichho Dzong, the seat of the Royal Government and the summer residence of the Head Abbot and the central monastic school. Night halt at Thimphu.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 4</time>
                                <h3 class="text-lg font-semibold text-gray-900">Whole day Thimphu sightseeing</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Visit Buddha point and then to Semtokha Dzong, the oldest fortresses in Bhutan. It was built in 1629 A.D and houses the largest monastic school in the country. Lunch – later visit the woodcrafts and painting school where traditional art are still kept alive. Visit - Handicraft Emporium. Evening stroll nearby areas.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                <h3 class="text-lg font-semibold text-gray-900">The treks begins from Thimphu to Talekha</h3>
                                <p class="text-base font-normal text-gray-500">
                                    The trek in actual starts from Semtokha Dzong where the ponies and camping crew members will be waiting. The trek trail leads through blue pine and evergreen forest till Talekha village, which lies at an altitude of 2926m. The village consists of five houses and a huge temple called Tale Lhakhang. Night Halt at Talekha campsite.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 6</time>
                                <h3 class="text-lg font-semibold text-gray-900">Talekha to Japhuna</h3>
                                <p class="text-base font-normal text-gray-500">
                                    The trek leads you through thick forests of blue pine and evergreen oak trees into soft pine and spruce forest for about two and half hours. For lunch halt at a yak camp site or any where found relevant. Yak camp is where tree line begins. After Lunch – cross Jelezela pass (4000m). From that pass one can have a breathtaking view of Thimphu valley and its surrounding mountain ridges. After crossing two ridges you arrive at the second campsite Japhuna situated at the altitude of 3800 m above the sea level.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 7</time>
                                <h3 class="text-lg font-semibold text-gray-900">Japhuna to Jaduna</h3>
                                <p class="text-base font-normal text-gray-500">
                                    The trail from Japhuna takes yo up and down over several ridges for about four houses till you come across a small stream where you will find two trails which will lead you to the same destination. Along the route, there are many small lakes. After another hour and a half climb through rhododendron shrubs, you will then reach third campsite which is also a yak camp situated at the altitude of 4100m above the sea level.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 8</time>
                                <h3 class="text-lg font-semibold text-gray-900">Jaduna - Labatama</h3>
                                <p class="text-base font-normal text-gray-500">
                                    There are two trails, one going on the left side of Aum Jomo (highest peak in the Dagala range), and the other onto the right side of Aum Jomo over the Jomigue pass and Setso Yumtsho lakes. We follow the trail that goes on the right side of Aum Jomo and climb up to the Jomigue pass – known as Chalila (from the local Source.) After crossing Dungka tso..You will witness beautiful views of the mountains towards northern Bhutan – Further descents 2 hrs to reach Labatama which is again the yam camp site by the side of Tumtso Lake. Night halt nearby Tumtso
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 9</time>
                                <h3 class="text-lg font-semibold text-gray-900">Labatama (Halt)</h3>
                                <p class="text-base font-normal text-gray-500">
                                    While reaching this place we will spend one whole day doing sightseeing visiting several lakes and enjoy a good fly fishing day in the lakes. Optional – Go back to Jomigue pass and climb Aum Jomo till the summit situated at the altitude of 5050m above the sea level which will take 5-6 hours to cover the round trip.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 10</time>
                                <h3 class="text-lg font-semibold text-gray-900">Labtama - Genekha</h3>
                                <p class="text-base font-normal text-gray-500">
                                    On the 10th day of the trekkings we leave the lovely pasture of Labana and move out of Dagala range. The trails ascends gradually through beautiful landscape will you reach Pagalaptsa pass situated at the altitude of 4170m above the sea level and it is also the highest point covered on the 10th day. From this point you will be able to see Genekha village and some part of Paro valley. After the pass, you gradually climb down through thick Rhododendron shrubs and thick oak forest till you reach Genekha. Night halt camp at Genekha.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 11</time>
                                <h3 class="text-lg font-semibold text-gray-900">Genekha to Paro</h3>
                                <p class="text-base font-normal text-gray-500">
                                    From Genekha a short walk will reach the motor road where your transport will be waiting for you to be welcomed. Smooth drive to Paro, which is merely 45kms and will reach Paro in less than an hour. Night halt at Paro. We will recommend you to have traditional hot stone bath which helps you liberate from the bone ache and other muscles problems. Night Halt at Paro
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 12</time>
                                <h3 class="text-lg font-semibold text-gray-900">Taktsang Hike(Optional)/Sightseeing Paro</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Early breakfast and hike up to Taktsang situated 900m above from the valley level. Once you reach the top you will feel that your efforts have not gone in vain. Other historic explanations will be shared by our guide.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 13</time>
                                <h3 class="text-lg font-semibold text-gray-900">Departure</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Time for departure and depending on the flight schedule our representatives will drop you to the airport and help you with the luggages. We thank you for travelling with us!
                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>

            {/* 8 N 9 D Druk Path Trek */}
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={mist} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                </div>


                <div className="basis-1/2 flex flex-col">
                    <div className='text-center p-5 border-b'>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900"> Druk Path Trek | ( 8 Nights | 9 Days )</h5>
                    </div>

                    <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Arrive in Paro</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 ">
                                    The flight to Paro is very thrilling and is full of excitement. Our representatives will present themselves at Paro airport. Lunch – afternoon sightseeing includes; Ta dzong presently serves as National Musuem and then followed by Paro Dzong and currently serves as the district administration centre. Later walk to the beauitful wooden bridge that connects to the main giving people easy access. Night halt in paro
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Famous Taktsang Hike</h3>
                                <p class="text-base font-normal text-gray-500 ">
                                    After early breakfast hike to Taktshang Monastery. It is worth hiking for it is also known as the birth place of Buddhism. The uphill hike takes 3 to 4 hours and sometime even lessed depending on the fitness of the hikers. The Monastery is built on a sheer cliff face 900 m aboue the valley is a breathtaking sight.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 3</time>
                                <h3 class="text-lg font-semibold text-gray-900">Paro to Jele Dzong</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Trek Begins. The journey starts with a climb up to Jele Dzong that is about 8 kms upward hike
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 4</time>
                                <h3 class="text-lg font-semibold text-gray-900">Jele Dzong to Jangchulakha</h3>
                                <p class="text-base font-normal text-gray-500">

                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                <h3 class="text-lg font-semibold text-gray-900">Jangchulakha to Jimilangtso</h3>
                                <p class="text-base font-normal text-gray-500">

                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 6</time>
                                <h3 class="text-lg font-semibold text-gray-900">Jimilangtso to Semtokha</h3>
                                <p class="text-base font-normal text-gray-500">

                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 7</time>
                                <h3 class="text-lg font-semibold text-gray-900">Semtokha to Phajoding</h3>
                                <p class="text-base font-normal text-gray-500">

                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 8</time>
                                <h3 class="text-lg font-semibold text-gray-900">Phajoding to Thimphu</h3>
                                <p class="text-base font-normal text-gray-500">

                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 9</time>
                                <h3 class="text-lg font-semibold text-gray-900">Capital sightseeing and drive to Paro</h3>
                                <p class="text-base font-normal text-gray-500">

                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 10</time>
                                <h3 class="text-lg font-semibold text-gray-900">Departure</h3>
                                <p class="text-base font-normal text-gray-500">

                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>

            {/* 4 N 5 D Sangala Trek */}
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:mt-5 border border-gray-200 rounded-lg shadow mb-32">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={mountain} alt="Masked Dance" className='rounded-t-lg rounded-l-lg w-full h-full object-cover' />
                </div>


                <div className="basis-1/2 flex flex-col">
                    <div className='text-center p-5 border-b'>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900"> Sagala Trek | ( 3 Nights | 4 Days )</h5>
                    </div>

                    <div className="max-h-[26rem] overflow-y-auto text-lg text-gray-700 p-5 lg:py-0">
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 1</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Arrival to Paro </h3>
                                <p class="mb-4 text-base font-normal text-gray-500 ">
                                    Our representatives will be there to receive you and welcome you warmly. Later escort you to the pre-designated  hotel for check in. Later in the evening sightseeing will be done in the nearby areas. Night halt at Paro.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 2</time>
                                <h3 class="text-lg font-semibold text-gray-900 ">Head to Haa and further start the hike after lunch</h3>
                                <p class="text-base font-normal text-gray-500 ">
                                    Breakfast will be serving early and head to Haa via Chelela Pass (3990m). Enjoy vehicle sightseeing, as there is lot to be witness while travelling to Haa. Your guide will be giving you explanation on the way as and when we come across the important sites. Lunch will be served at Haa – further proceed to the hiking point where our horse man will waiting for us to begin the trek. Your trek begins in the Haa Valley (2670m) and camp at Sagala.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 3</time>
                                <h3 class="text-lg font-semibold text-gray-900">Sagala to Ningula</h3>
                                <p class="text-base font-normal text-gray-500">
                                    The second day of the hike is a 12 km walk from the campsite and the trek continues for 5 hours. From the campsite walk for 30 minutes to Sagala pass which is situated at the altitude of 3550 above the sea level. From the pass on a clear day you will have stunning view of Mt. Jomolhari and Mt. Jitchu Drake. On the hike you will get many things to enjoy especially the mountain ranges in the north. After making several ascents and descents, walking through the trails of rhododendrons and meadows, you will finally be on the top of the ridge at 4100m, which offers great views of Haa Valley below. Making occasional ascents and descents through forests of hemlock and juniper, you will reach at your camp at 3850m. Night halt at Ningula.
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 4</time>
                                <h3 class="text-lg font-semibold text-gray-900">Ningula to Paro via Kungkarpo pass</h3>
                                <p class="text-base font-normal text-gray-500">
                                    The last day trek is a 13 km hike which will take 5-6 hours to make it to Chelela. Descending for few minutes and following the ridge through meadows and yak herder’s camp, we climb uphill through the forest of tall rhododendrons toward Kung Karpo Sky Burial at 4350m. The view of Haa valley is spectacular as you climb up to Kung Karpo. From the sky burial, you will be walking up and down with panoramic view of Paro valley on left and Haa Valley on right. The view of Kila Goempa appears. Walk further downhill until you reach Chelela pass (3990m), whereby our tour vehicle will be there to pick up us and further drive to the hotels for check In. Night halt at Paro
                                </p>
                            </li>
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400">Day 5</time>
                                <h3 class="text-lg font-semibold text-gray-900">Departure</h3>
                                <p class="text-base font-normal text-gray-500">
                                    Depending on the flight schedule our tour team will escort youto the air port and help you to get your stuff in to see you off for your onward destination.
                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdventureIteneries;