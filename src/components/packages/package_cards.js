
function PackageCards() {
    return (
        <>
            <div className="flex flex-grow justify-center text-white">
                <div id="cultural-tours"
                 className="flex items-end justify-center flex-grow w-40 max-w-2xl max-h-[rem] m-4 rounded-lg shadow">
                    <h1 className="text-bold text-xl p-2">
                        Cultural Tours
                    </h1>
                </div>
                <div id="trekking-tours" 
                className="flex items-end justify-center flex-grow w-40 max-w-2xl max-h-[rem] m-4 rounded-lg shadow">
                    Trekking and Fishing Tours
                </div>
            </div>
            <div className="justify-self-start flex flex-grow justify-center text-white">
                <div id="honeymoon-tours"
                 className="flex items-end justify-center flex-grow w-40 max-w-2xl max-h-[rem] m-4 rounded-lg shadow">
                    Honeymoons and Wedding
                </div>
                <div id="special-packages"
                 className="flex items-end justify-center flex-grow w-40 max-w-2xl max-h-[rem] m-4 rounded-lg shadow">
                    Special packages
                </div>
            </div>
        </>
    )
}

export default PackageCards;