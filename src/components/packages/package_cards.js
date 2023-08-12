
function PackageCards() {
    return (
        <>
            <div className="flex flex-grow justify-center text-white font-bold text-2xl p-2">
                <div id="cultural-tours"
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Cultural Tours
                    </h1>
                </div>
                <div id="trekking-tours"
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Trekking & Fishing Tours
                    </h1>

                </div>
            </div>
            <div className="flex flex-grow justify-center text-white font-bold text-2xl p-2">
                <div id="honeymoon-tours"
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Honeymoons and Wedding
                    </h1>

                </div>
                <div id="special-packages"
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Special packages
                    </h1>

                </div>
            </div>
        </>
    )
}

export default PackageCards;