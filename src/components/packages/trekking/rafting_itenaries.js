import rafting_description from '../../../assets/rafting_description.jpeg'
import rafting_one from '../../../assets/rafting_one.jpeg'
import rafting_two from '../../../assets/rafting_two.jpeg'

function RaftingItenaries({}) {
    return (
        <div id='raftingElement' className="flex flex-col">
            <div id="rafting-container" className="flex flex-col">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="backdrop-blur-sm p-8 rounded-full">
                        <p className="text-8xl text-red-800 tracking-widest"> Rafting And Kayaking</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl mt-10">
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                    <img src={rafting_two} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-center' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                    Rafting and kayaking in Bhutan offer exhilarating water adventures set against the backdrop of stunning Himalayan landscapes. Bhutan's rivers, including the Paro Chhu, Mo Chhu, Pho Chhu, and Mangde Chhu, provide the ideal canvas for these water sports, each offering unique experiences.<br /><br />

                    Bhutan caters to adventurers of all levels, making it accessible for both beginners and experienced rafters. Whether you seek a leisurely float or challenging rapids, the country's rivers have options to match your skill and comfort levels.<br /><br />

                    For kayakers, Bhutan's rivers present a playground of thrilling technical sections, especially in the upper reaches where you can navigate through exciting rapids and twists. The combination of water sports and the pristine natural environment is a hallmark of rafting and kayaking in Bhutan.
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl mt-10">
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                    As you paddle through these rivers, you'll find yourself surrounded by lush forests, remote valleys, and untouched landscapes. Bhutan's commitment to preserving its natural beauty ensures that these waters remain unspoiled and pristine.<br /><br />

                    Rafting and kayaking in Bhutan also offer unique cultural experiences. Along the riverbanks, you may encounter traditional villages and monasteries, allowing you to interact with locals and gain insights into Bhutanese culture and heritage.<br /><br />

                    The experience of rafting and kayaking in Bhutan varies with the seasons. Spring (March to May) is ideal for those seeking the adrenaline rush of challenging rapids, while autumn (September to November) offers milder river conditions and the chance to enjoy the breathtaking scenery at a more leisurely pace.
                </div>
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center sm:order-first lg:order-last'>
                    <img src={rafting_one} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-top' />
                </div>
            </div>
            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl my-10">
                <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                    <img src={rafting_description} alt="Culltural Tours" className='w-full max-h-[26rem] object-cover object-top' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-xl text-grey-800 p-5 md:mt-5 lg:mt-0 lg:py-0">
                    Safety is paramount when engaging in water sports in Bhutan. Tour operators provide experienced guides who are well-versed in river safety protocols and offer necessary equipment, including life jackets and helmets, to ensure a secure adventure.<br /><br />

                    Bhutan's commitment to responsible tourism extends to its water sports activities, with tour operators following eco-friendly practices to minimize the environmental impact, ensuring that these adventures can be enjoyed for generations to come.<br /><br />

                    Rafting and kayaking in Bhutan promise unforgettable experiences that combine the thrill of water sports with the serenity of pristine nature and the richness of Bhutanese culture.
                </div>
            </div>
        </div>
    )
}

export default RaftingItenaries;