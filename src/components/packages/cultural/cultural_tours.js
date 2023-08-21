import little_girl from '../../../assets/little_girl.jpeg'
import festival_pic from '../../../assets/festival_pic.jpeg'
import gangtey_goenpa from '../../../assets/gangtey_goenpa.jpeg'
import respect_nature from '../../../assets/respect_nature.jpeg'

function CulturalTours() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center">
                <h1 className="pt-16 pb-8 text-4xl font-semibold"> Cultural Tours</h1>
            </div>

            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={festival_pic} alt="Taktshang Iconic Destination" className='' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 lg:py-0">
                    Embark on a cultural tour of Bhutan and immerse yourself in the unique traditions, customs, and spiritual practices that have been preserved for centuries.
                    Bhutan, also known as the kingdom of Bhutan, is a landlocked country located in the Eastern Himalayas in South Asia. Bhutanese culture is deeply rooted in the country’s rich Buddhist heritage, which has shaped its traditions, customs, and way of life. Bhutan is popularly referred to as the land of happiness and is renowned for its cultural heritage and breathtaking landscapes.
                </div>
            </div>

            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={gangtey_goenpa} alt="Gangtey Goenpa" className='' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 lg:py-0">
                    Buddhism is the predominant religion in Bhutan, and it plays a central role in the daily lives of the Bhutanese people. While surfing through Bhutan one will know Gross National Happiness and it’s the unique development philosophy, which prioritizes the overall well-being and happiness of its citizens over material wealth.<br /><br />
                    Visiting Bhutan for cultural tour offers you diverse experiences. The very first thing one will notice is Bhutanese architecture and it is characterized by its unique traditional style known as “Dzong architecture.” Dzongs are fortress like structures that serve as an administrative centers, monasteries, and religious institutions. These buildings are constructed without the use of nails and features intricate woodwork, vibrant paintings, and large courtyards.
                </div>
            </div>

            <div className="container mx-auto flex md:flex-col lg:flex-row lg:pt-5 shadow-xl">
                <div className='basis-1/2 lg:mr-8 flex justify-start items-center'>
                    <img src={respect_nature} alt="Gangtey Goenpa" className='' />
                </div>
                <div className="flex basis-1/2 justify-center items-center text-lg text-gray-700 p-5 lg:py-0">
                    Respect of Nature is a speciality and the core of Bhutanese culture. Bhutan is known for its commitment to environmental conservation and its dedication to maintaining a pristine nature environment. The country has set aside a significant portion of its land as protected areas, and the
                    government and country’s biodiversity.<br/><br/>
                    Preserving the Bhutanese culture is deeply intertwined with spirituality, nature, and the pursuit of happiness. The Bhutanese people take great pride in their unique cultural heritage and strive to preserve and promote it in the face of modernization.
                </div>
            </div>
        </div>
    )
}

export default CulturalTours;