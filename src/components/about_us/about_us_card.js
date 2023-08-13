import { useEffect } from 'react';
import { useState } from 'react';
import cardPicture from '../../assets/avatar.png'
import vijay_daju from '../../assets/vijay_daju.jpeg'
import AboutUsSlider from './about_us_slider';
import { BiCircle } from 'react-icons/bi'

function AboutUsCard() {
    const [activeIndex, setActiveIndex] = useState(0);
    const slider_details = [
        {
            header: 'About Us',
            body: `Travel Finder Tours was found by Mr. Vijay Darjee, a graduate, a travel enthusiast
            whose dream is far beyond meeting foreigners. Our team of seasoned travel experts is
            well-versed in designing tailored itineraries that cater to diverse interests, whether its’s a
            relaxing beach getaway, an adventurous safari, cultural exploration, or luxury escapes.
            We welcome to Travel Finder Tours, where travel dreams come true. With a passion for
            exploration and a commitment to exceptional service, we are your trusted partner in
            creating unforgettable travel experiences. With over a decade’s experience in the travel
            industry, we have honed our skills in crafting personalized journeys for individuals,
            families and groups.`
        },
        {
            header: 'What We Do',
            body: `We provide a wide array of services to fullfil all your travel needs. From flights and
            accommodations to transportation,tours,and travel insurance, we handle every aspect of
            your trip with comprehensive attention to detail. For B2B partners, our partnerships with
            reputable hotels, and local suppliers allow us to offer exclusive deals and added perks to
            enhance one’s travel experience. Additionally, we specialize in crafting bespoke
            itineraries, ensuring every journey is tailored to your preferences and desires. We strive
            to exceed you expectations by delivering seamless travel experiences, offering 24/7
            support, and being your trusted companion.`
        },
        {
            header: 'Why Choose Us',
            body: `We are genuine, not just in terms of selling our services, but much beyond business
            parameters. Travelling with us is all about saftey, accountability and reliability. We ensure
            our valued clients that when we say it we seriously mean it. A razor precise focus on our
            domain expertise of delivering services to our valued clients ensuring travellers gets the
            expected quality service.`
        }
    ]
    useEffect(() => {
        const aboutInterval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 6000);

        return () => {
            clearInterval(aboutInterval);
          };
    }, [activeIndex]);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= slider_details.length) {
            newIndex = newIndex % slider_details.length
        }
        
        setActiveIndex(newIndex)
        
    }
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <div className="flex md:flex-col lg:flex-row mx-10 lg:ml-44 lg:mr-0 flex-grow bg-neutral-100 border-l-8 border border-s-gre drop-shadow-2xl">
                <div className="lg:basis-2/3 flex flex-col justify-center items-center overflow-hidden shadow-inner">
                    {
                        slider_details.map((item, index) => {
                            return <AboutUsSlider item={item} index={index} hello={activeIndex} />;
                        })
                    }
                    <div className='basis-1/12 justify-self-end flex justify-center sm:p-5 lg:p-0'>
                        {
                            slider_details.map((item, index) => {
                                return (
                                    <button className='px-2' onClick={() => {
                                        updateIndex(index)
                                    }}>
                                        < BiCircle size={20} className={index == activeIndex ? 'text-ora bg-ora rounded-full' : ''}/>
                                    </button>
                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div className="md:order-first lg:order-none lg:basis-1/3">
                    <img src={vijay_daju} alt="Travel Finder Tours Bhutan" className='w-full' />
                </div>
            </div>
        </>
    )
}


export default AboutUsCard;