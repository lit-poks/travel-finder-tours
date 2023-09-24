import { useLockBodyScroll } from "@uidotdev/usehooks";
import { Accordion } from 'flowbite-react';

function FooterModal({ faqModal, toggleFaqModal }) {
    useLockBodyScroll()

    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
            toggleFaqModal()
        }
    }
    return (
        <>
            <div
                onClick={handleModalClick}
                className={`${faqModal ? 'hidden' : ''} w-screen h-screen backdrop-blur top-0 left-0 sticky flex justify-center items-center z-10`}>
                <div className="bg-white rounded-lg shadow h-fit sm:w-9/12 lg:w-6/12">
                    <div className="flex justify-center items-center p-4 shadow">
                        <h3 className="flex-grow text-center text-xl font-semibold text-gray-900">
                            Frequently Asked Questions
                        </h3>
                        <button type="button" onClick={() => {
                            toggleFaqModal()
                        }}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-12 py-4 max-h-[28rem] md:max-h-[37rem] overflow-auto text-center bg-neutral-50">
                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    Where is Bhutan located?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        <p>
                                            Bhutan is situated in Asia and to be more precise it shares borders with the two most populated country India and China.
                                        </p>
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>

                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    Do travellers require travel VISA to visit Bhutan?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        <p>
                                            Yes, all travelers are required except for Indian. Bangladeshi and Maldevian nationals can get
                                            their visa stamp on arrival at the port of entry.
                                        </p>
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>

                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    How much do I need to pay for Visa?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        <p>
                                            One time Visa fee of 40 USD per person and is non refundable. Only applicable to International travelers
                                        </p>
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>

                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    How much do I need to SDF fee?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        <p>
                                            SDF is referred to as the sustainable development fee and this goes to a government account
                                            as an indirect contribution or donation from travelers. The collected funds are invested wisely to
                                            fund projects that support country’s economy, Social enironment and cultural development. The
                                            same fund is also invested in improving better tourism infrastructure and free health care for
                                            both foreigners and nationals.
                                        </p><br />
                                        <p>
                                            <strong>International Traveler:</strong>
                                            <p>
                                                100 USD per person |night. However, minors travelling between the age of 6 – 12 years are charge 50% of the adult SDF cost. Minors aged 5 or below are exempted.
                                            </p>
                                        </p><br />
                                        <p>
                                            <strong>Regional Travelers:</strong>
                                            <p>
                                                1200 Rupee per person|night. 50% SDF concessionary levy for children between the age of 6 – 12 years. Children age 5 and below are exempted.
                                            </p>
                                        </p>
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>

                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    What are the documents required to process travel permit or visa?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        <p>
                                            <strong>International Traveler:</strong>
                                            <p>
                                                • Travel passport with minimum of six months validity during the time of arrival.
                                            </p>
                                            <p>
                                                • A recent passport size photo (2Nos)
                                            </p>
                                            <p>
                                                • Travel insurance certificate for the entire stay in Bhutan
                                            </p>
                                        </p><br />
                                        <p>
                                            <strong>Regional Travelers:</strong>
                                            <p>
                                                • A valid travel passport with minimum of 6 months validity is must.
                                            </p>
                                            <p>
                                                • Voter Card & Birth certificate of the children below the age of 18.
                                            </p>
                                            <p>
                                                • Travel Insurance which can be paid while endorsing travel permit.
                                            </p>
                                            <p>
                                                • Two no. recent passport size photo.
                                            </p>
                                        </p>
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>

                        <Accordion collapseAll >
                            <Accordion.Panel>
                                <Accordion.Title>
                                    When is the idle time to visit Bhutan?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        <p>
                                            Traveling during Spring (March, April, May) and Autumn (September, October, November)  is considered idle mainly due to favourable weather conditions.
                                        </p>
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterModal;