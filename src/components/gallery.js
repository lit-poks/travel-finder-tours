import Navbar from "./navbar";

function importAllImages(r) {
    return r.keys().map(r);
}

const images = importAllImages(require.context('../assets/gallery', false));


function Gallery() {
    return (
        <>
            <div id="image-container" className='flex flex-col'>
                <Navbar />
                <div id='culturalElement' className="flex flex-col">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-6 my-8">
                        {
                            images.map((image, index) => {
                                return (
                                    <div>
                                        <img className="h-[18rem] w-[27rem] rounded-lg hover:scale-90 hover:duration-150" src={image} alt="" />
                                    </div>
                                )
                            }
                            )

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;