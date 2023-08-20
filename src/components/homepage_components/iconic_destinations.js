import taktshang from '../../assets/taktshang.jpeg'
import phobjikha_valley from '../../assets/phobjikha_valley.jpeg'

function IconicDestinations() {
    return (
        <>
            <div className="divide-y flex flex-col mb-5">
                <div className="flex items-center justify-center">
                    <h1 className="pt-16 pb-8 text-4xl font-semibold"> Iconic Destinations</h1>
                </div>


                <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl">
                    <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                        <img src={taktshang} alt="Taktshang Iconic Destination" className='' />
                    </div>
                    <div className="flex basis-1/2 justify-center items-center text-base text-gray-700 p-5 lg:py-0">
                        Tiger's Nest, also known as Paro Taktsang. It's one of the most iconic and breathtaking destinations in Bhutan. This stunning monastery is perched on a cliffside, surrounded by lush greenery and panoramic views.<br /><br />
                        To reach the Tiger's Nest, you'll embark on an epic hike through a scenic trail. The journey itself is an adventure, filled with awe-inspiring landscapes and fresh mountain air. As you ascend, you'll come across prayer flags fluttering in the wind, adding to the spiritual atmosphere.<br /><br />
                        The views from the Tiger's Nest are absolutely stunning, providing the perfect backdrop for your travel memories.<br /><br />
                        Visiting the Tiger's Nest is not just a physical journey, but a spiritual one as well. It's a place where you can connect with nature, find inner peace, and experience the rich cultural heritage of Bhutan.<br /><br />
                    </div>
                </div>


                <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 sm:mt-5 lg:mt-0 shadow-xl">
                    <div className="flex basis-1/2 justify-center items-center text-base text-gray-700 lg:mr-8 p-5 lg:py-0 sm:order-last lg:order-first">
                        Thimphu, the capital city of Bhutan, is a vibrant and enchanting place that perfectly blends tradition with modernity. It's surrounded by breathtaking mountains and offers a unique cultural experience.<br /><br />
                        Another iconic landmark is the Memorial Chorten, a beautiful stupa dedicated to the late Third King of Bhutan. It's a place of prayer and reflection, and you can often seen locals and monks offering their respects.
                    </div>
                    <div className='basis-1/2 flex justify-center items-center'>
                        <img src={taktshang} alt="Taktshang Iconic Destination" className='' />
                    </div>
                </div>

                <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl sm:mt-5 lg:mt-0">
                    <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                        <img src={phobjikha_valley} alt="Taktshang Iconic Destination" className='' />
                    </div>
                    <div className="flex basis-1/2 justify-center items-center text-base text-gray-700 p-5 lg:py-0">
                    Phobjikha Valley in Bhutan is a stunning destination known for its natural beauty and unique wildlife. It's home to the endangered black- necked cranes, which migrate here during the winter months. The valley is surrounded by picturesque mountains and offers breathtaking views. Don't miss the Gangtey Monastery, a must-visit attraction in Phobjikha Valley.
                    </div>
                </div>
            </div>
        </>
    )
}

export default IconicDestinations;