import biking_last from '../../../assets/biking_container.jpeg'
import biking_main from '../../../assets/biking_main.jpeg'
import biking_one from '../../../assets/biking_one.jpeg'
import biking_two from '../../../assets/biking_two.jpeg'

function BikingItenaries({ }) {
    return (
        <div id='bikingElement' className="flex flex-col">
            <div id="biking-container" className="flex flex-col">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="backdrop-blur-sm p-8 rounded-full">
                        <p className="text-8xl text-red-800 tracking-widest"> Biking Tours</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl mt-10">
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                    <img src={biking_main} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-bottom' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                    Motorbike tours in Bhutan offer an exciting and unique way to explore the enchanting landscapes and vibrant culture of this Himalayan kingdom. Bhutan's diverse terrain, featuring winding mountain roads, lush valleys, and serene riverbanks, provides motorbike enthusiasts with an array of scenic routes, each offering breathtaking views of the majestic Himalayas and the opportunity to connect intimately with the country's natural beauty.<br /><br />
                    Whether you're an experienced rider or a novice, Bhutan caters to motorbike enthusiasts of all skill levels, thanks to its well-maintained roads and relatively low traffic, ensuring accessibility for riders with varying degrees of experience.
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl mt-10">
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                    What makes motorbike tours in Bhutan truly special is the deep cultural immersion they offer. As you ride through traditional villages, visit ancient monasteries and dzongs (fortresses), and interact with friendly locals, you'll find Bhutan's rich cultural heritage seamlessly woven into the fabric of your journey.<br/><br/>
                    Tour operators in Bhutan often provide customizable itineraries, allowing you to tailor your adventure to your preferences. Whether you seek challenging off-road tracks or a leisurely ride through picturesque valleys, you have the flexibility to design your ideal journey.
                </div>
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center sm:order-first lg:order-last'>
                    <img src={biking_one} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-bottom' />
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl my-10">
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                    <img src={biking_last} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-top' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                Bhutan's motorbike tours vary with the seasons. Spring (March to May) and autumn (September to November) are popular for riding due to milder weather conditions and clearer skies. However, each season offers a unique perspective of Bhutan's landscapes, making it an evergreen destination for motorbike enthusiasts. Bhutan's commitment to responsible tourism aligns well with the spirit of preserving its natural beauty, and motorbike tour operators follow eco-friendly practices to minimize the environmental impact of these journeys.
                </div>
            </div>
        </div>
    )
}

export default BikingItenaries;