import taktshang from '../../assets/taktshang.jpeg'
import memorial_chorten from '../../assets/chorten.jpeg'
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
                        Taktsang Monastery, also known as the Tiger's Nest, perched dramatically on the cliffs of Bhutan. This expertly curated hike offers an unforgettable adventure, blending natural beauty, cultural immersion, and spiritual significance.<br /><br />
                        As you lace up your hiking boots, prepare for an exhilarating trek through verdant forests, ascending gradually towards the monastery. The trail, surrounded by the fragrance of pine and rhododendron, provides stunning vistas of the Paro Valley below. Experienced guides will share tales of legends and history, enriching your hike with insights into Bhutan's spiritual heritage.<br /><br />
                        Feel the energy of devotion as you reach the iconic Tiger's Nest, a sacred site where Guru Rinpoche is said to have meditated. The spiritual ambiance is palpable as you explore the monastery's intricate architecture and absorb panoramic views that stretch beyond earthly bounds.<br /><br />
                        This journey ensures a seamless experience, from transportation to a thoughtfully paced hike suitable for various fitness levels. Immerse yourself in Bhutan's natural grandeur and cultural richness as you embark on this once-in-a-lifetime adventure to Taktsang. Join to create cherished memories and a deeper connection with the Land of the Thunder Dragon.<br /><br />
                    </div>
                </div>


                <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 sm:mt-5 lg:mt-0 shadow-xl">
                    <div className="flex basis-1/2 justify-center items-center text-base text-gray-700 lg:mr-8 p-5 lg:py-0 sm:order-last lg:order-first">
                        The Memorial Chorten stands as a beacon of spiritual devotion and cultural significance. This majestic white stupa, also known as the Thimphu Chorten, serves as both a place of worship and a memorial to the Third King of Bhutan, Jigme Dorji Wangchuck.<br /><br />
                        Surrounded by lush gardens and framed by the towering Himalayan peaks, the Memorial Chorten exudes an air of serenity amidst the bustling cityscape. Its elegant and traditional Bhutanese architecture is adorned with intricate carvings, colorful paintings, and ornate mandalas, reflecting the nation's deep-rooted Buddhist heritage.<br /><br />
                        Locals and pilgrims alike flock to the chorten to circumambulate its sacred exterior, spinning prayer wheels and reciting mantras. Inside, the sanctum houses a revered image of Guru Rinpoche, the Padmasambhava, a revered figure in Bhutanese Buddhism.<br /><br />
                        The chorten is not only a religious site but also a social hub where people gather to engage in spiritual practices, converse, and find solace. It's a living testament to Bhutan's devotion to preserving its cultural traditions and promoting well-being.<br /><br />
                        The Memorial Chorten's significance extends beyond its religious and cultural roles. It stands as a place for reflection and remembrance, honoring the visionary contributions of King Jigme Dorji Wangchuck, who played a pivotal role in modernizing Bhutan while cherishing its heritage.<br /><br />
                        Whether you're seeking spiritual solace, cultural immersion, or simply a serene escape from the city, the Memorial Chorten offers an enchanting experience that encapsulates the essence of Bhutan's rich spiritual and cultural tapestry.
                    </div>
                    <div className='basis-1/2 flex justify-center items-center'>
                        <img src={memorial_chorten} alt="Taktshang Iconic Destination" className='' />
                    </div>
                </div>

                <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl sm:mt-5 lg:mt-0">
                    <div className='basis-1/2 lg:mr-8 flex justify-center items-center'>
                        <img src={phobjikha_valley} alt="Taktshang Iconic Destination" className='' />
                    </div>
                    <div className="flex basis-1/2 justify-center items-center text-base text-gray-700 p-5 lg:py-0">
                        The Phobjikha Valley, also known as Gangtey Valley, is a pristine haven that marries natural beauty with cultural depth. Cradled by mountains, the valley unveils ever-changing landscapes from lush meadows to snowy peaks. Unique to this region, black-necked cranes migrate here, celebrated through the annual Black-Necked Crane Festival.<br /><br />
                        The Gangtey Monastery, an ancient Buddhist temple, graces the valley, a testament to Bhutan's spiritual heritage. Sustainability is paramount here, aligning with Bhutan's ethos. Responsible tourism preserves its delicate ecosystem, offering trekking routes for adventurers.<br /><br />
                        Accessing the valley requires effort, usually involving a flight to Paro International Airport followed by a scenic road trip. Bhobjikha Valley embodies Bhutan's holistic approach, harmonizing nature, culture, and sustainability in an embrace that captivates all who seek its serenity.
                    </div>
                </div>
            </div>
        </>
    )
}

export default IconicDestinations;