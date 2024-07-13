import Footer from "../../footer";
import couple from '../../../assets/couple.jpeg'
import luxury_resort from '../../../assets/luxury_resort.jpg'
import luxury_stay from '../../../assets/luxury_stay.jpeg'
import luxury_dining from '../../../assets/luxury_dining.jpeg'
import luxury_spa from '../../../assets/luxury_spa.jpg'
import luxury_culture from '../../../assets/luxury_culture.jpg'

function LuxuryTours() {
    return (
        <>
            <div id="luxury-container" className="flex flex-col">
                <div className="flex justify-center items-center h-32">
                </div>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="backdrop-blur-sm p-8 rounded-full">
                        <p className="text-8xl text-orange-400 text-center playwrite-hu-luxury">Majestic Journeys</p>
                        <p className="mt-8 text-white font-normal text-3xl tracking-widest text-center">Experience unparalleled luxury and adventure.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="pt-16 pb-8 text-4xl font-semibold"> Exquisite Accommodations</h1>
                </div>
                <div className='shadow-xl'>
                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 mt-10">
                        <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                            <img src={luxury_stay} alt="Honeymoon Couple" className='w-full max-h-[26rem] object-cover object-center' />
                        </div>
                        <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 md:mt-5 lg:mt-0 lg:py-0 leading-6">
                            Bhutan, the mystical kingdom nestled in the Himalayas, offers an unparalleled luxury travel experience characterized by its pristine natural beauty, rich cultural heritage, and unique blend of traditional and modern comforts.
                            Luxury stays in Bhutan are designed to provide discerning travelers with the utmost in comfort, exclusivity, and personalized service, ensuring an unforgettable journey.
                        </div>
                    </div>

                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 mt-10">
                        <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 md:mt-5 lg:mt-0 lg:py-0 leading-6">
                        Luxury hotels and resorts in Bhutan, such as Zhiwa Ling Heritage, Postcard Dewachen, Pemako, &Beyond Punakha River Lodge, and Six Senses blend seamlessly with the serene landscapes, offering stunning views of lush valleys, snow-capped peaks, and ancient monasteries.
                        These properties feature spacious suites and villas adorned with Bhutanese art and craftsmanship, combining traditional aesthetics with modern amenities.
                        </div>
                        <div className='basis-1/2 lg:mr-8 flex justify-center items-center sm:order-first lg:order-last'>
                            <img src={luxury_resort} alt="Honeymoon Couple" className='w-full max-h-[26rem] object-cover object-center' />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="pt-16 lg:pb-8 text-4xl font-semibold">Gourmet Dining</h1>
                    </div>

                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 mt-10">
                        <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                            <img src={luxury_dining} alt="Honeymoon Couple" className='w-full max-h-[26rem] object-cover object-center' />
                        </div>
                        <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 md:mt-5 lg:mt-0 lg:py-0 leading-6">
                            Culinary experiences in Bhutan’s luxury hotels are designed to delight the palate with a fusion of Bhutanese flavors and international cuisine.
                            Guests can savour farm-to-table dining, enjoy gourmet picnics with panoramic views, and partake in traditional Bhutanese feasts accompanied by cultural performances.
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="pt-16 lg:pb-8 text-4xl font-semibold">World-Class Wellness and Spa Services</h1>
                    </div>

                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 lg:mt-10">
                        <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 md:mt-5 lg:mt-0 lg:py-0 leading-6">
                            Wellness is a cornerstone of the luxury experience in Bhutan. Guests can indulge in holistic spa treatments that incorporate Bhutanese healing traditions and natural ingredients.
                            Yoga and meditation sessions, often held in tranquil settings, provide a rejuvenating escape, allowing travelers to connect with Bhutan’s spiritual essence.
                        </div>
                        <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                            <img src={luxury_spa} alt="Honeymoon Couple" className='w-full max-h-[26rem] object-cover object-center' />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="pt-16 lg:pb-8 text-4xl font-semibold">Exclusive Cultural Experiences</h1>
                    </div>

                    <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 mt-10 mb-10">
                        <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                            <img src={luxury_culture} alt="Honeymoon Couple" className='w-full max-h-[26rem] object-cover object-center' />
                        </div>
                        <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 md:mt-5 lg:mt-0 lg:py-0 leading-6">
                            Luxury stays in Bhutan offer exclusive access to some of the country’s most revered sites and experiences.
                            Private tours to iconic landmarks like the Tiger’s Nest Monastery, Punakha Dzong, and the ancient temples of Thimphu are conducted by expert guides who provide deep insights into Bhutan’s history and traditions.
                            Guests can also enjoy intimate interactions with local artisans and participate in traditional ceremonies.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LuxuryTours;