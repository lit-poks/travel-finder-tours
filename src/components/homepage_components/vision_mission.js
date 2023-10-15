
function VisionMission() {
    return (
        <div id="vision-container" className="flex flex-col lg:flex-row">
            <div className="basis-4/5 bg-bridge bg-cover bg-center">
            </div>
            <div className="flex flex-col items-center bg-slate-100">
                <div className="flex-grow flex flex-col justify-end opacity-75 max-w-2xl py-8 pl-10 pr-5 rounded-3xl mb-8">
                    <p className="text-xl font-semibold pb-2 text-center">Vision</p>
                    <p className="text-lg text-justify font-base">
                        We want every visitor to Bhutan to go beyond being just tourists and truly feel the essence of the country, forming lasting friendships along the way.
                    </p>
                </div>
                <div className=" flex-grow flex flex-col justify-start opacity-75 max-w-2xl py-8 pl-10 pr-5 rounded-3xl mb-12">
                    <p className="text-xl font-semibold pb-3 text-center">Mission</p>
                    <p className="text-lg text-justify font-base">
                        We're committed to offering our guests safe, luxurious, and health-conscious travel experiences.
                        We also aim to showcase Bhutan's cultural richness, stunning architecture, and pristine environment, making it a top travel choice worldwide.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VisionMission;