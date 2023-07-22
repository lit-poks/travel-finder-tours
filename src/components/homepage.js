import Navbar from "./navbar";

function Homepage() {
    return (
        <>
            <div id="image-container">
                <Navbar />
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-end items-start h-96 ml-20'>
                        <div className="w-fit">
                            <p className="text-6xl text-white">Travel Finder Tours</p>
                            <p className="text-3xl text-white text-center">"Absolute Happiness"</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;