import logo from "../../assets/logo.png";
import usa_contact from "../../assets/usa_contact.jpeg";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineFlight } from 'react-icons/md'
import { MdOutgoingMail } from "react-icons/md";


function ContactInUsCard() {
    const openMail = () => {
        window.location = "mailto:info@travelfindertours.com"
    }
    return (
        <>
            <div className='md:max-w-lg lg:h-fit flex flex-row items-center justify-center bg-[#FFFBFB] rounded-lg shadow-xl'>
                <div className="flex flex-col items-center justify-center">
                    <div className="py-8">
                        <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">Contact In USA</h1>
                    </div>
                    <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                        <div className="mb-4 w-full md:w-2/5 flex flex-col items-center justify-center">
                            <div className="w-1/2 md:w-full rounded-full overflow-hidden">
                                <img src={usa_contact} alt="woman wearing a headwrap and an Africa-shaped earring while smiling" />
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 space-y-8 flex flex-col justify-center items-center space-">
                            <div className="w-full pb-2 flex flex-col justify-center border-b border-neutral-900">
                                <p className="inline text-gray-700 font-bold mb-2 leading-6 w-full text-center">
                                    <i className="iconoir-map-pin mr-2"></i> Address
                                </p>
                                <p className="inline text-gray-700 font-normal leading-6 w-full text-center">
                                    Concord 03303,
                                </p>
                                <p className="inline text-gray-700 font-normal leading-6 w-full text-center">
                                    New Hampshire
                                </p>
                                <p className="inline text-gray-700 font-normal leading-6 w-full text-center">
                                    USA
                                </p>

                            </div>
                            <div className="w-full pb-2 border-b border-neutral-900">
                                <a className="flex flex-col justify-center" href="tel:+97517937798" target='_blank'>
                                    <p className="inline text-gray-700 font-bold mb-2 leading-6 w-full text-center">
                                        <i className="iconoir-phone-outcome mr-2"></i> Contact
                                    </p>
                                    <p className="inline text-gray-700 font-normal leading-6 w-full text-center">
                                        +1(803) 458-8764
                                    </p>
                                </a>
                            </div>

                            <div className="w-full pb-2 border-b border-neutral-900">
                                <a className="flex flex-col justify-center" href="mailto:info@travelfindertours.com" target='_blank'>
                                    <p className="inline text-gray-700 font-bold mb-2 leading-6 w-full text-center">
                                        <i className="iconoir-send-mail mr-2"></i> Email
                                    </p>
                                    <p className="inline text-gray-700 font-normal leading-6 w-full text-center">
                                        Deepakdas04@icloud.com 
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex w-full py-8 items-center justify-center space-x-8">
                        <div className='cursor-pointer flex items-center justify-center'>
                            <a className='text-white' href='https://www.facebook.com/profile.php?id=100088179842340&mibextid=LQQJ4d' target='_blank'>
                                <FaFacebook color='blue' size={25} />
                            </a>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>

                            <a className='text-white' href='https://instagram.com/travel_finder_tours?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                                <FaInstagram color='#E1306C' size={25} />
                            </a>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <a className='text-white' href='http://www.tiktok.com/@travelfindertours_bhutan' target='_blank'>
                                <   FaTiktok color='#ff0050' size={25} />
                            </a>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <a className='text-white' href='https://wa.me/+97517937798' target='_blank'>
                                <   FaWhatsapp color='#25D366' size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="sm:py-8 lg:py-0">
                        <button type="button" onClick={() => {
                                openMail()
                            }}
                            className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            <p className="pr-2">Email Contact</p> < MdOutgoingMail size={23}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInUsCard;