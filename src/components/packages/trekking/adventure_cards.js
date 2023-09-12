
function AdventureCards({togglePackage}) {
    const toggleRafting = () => {
        togglePackage('Rafting', 'raftingElement')
    }
    const toggleBiking = () => {
        togglePackage('Biking', 'bikingElement')
    }
    return(
        <>
            <div className="flex flex-grow justify-center text-white font-bold text-2xl p-2 ">
                <div id="rafting"
                    onClick={toggleRafting}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Rafting and Kayaking
                    </h1>
                </div>
                <div id="biking"
                onClick={toggleBiking}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Motor Bike Tours
                    </h1>

                </div>
            </div>
            <div className="flex flex-grow justify-center text-white font-bold text-2xl p-2">
                <div id="honeymoon-tours"
                    // onClick={toggleHoneyMoonModal}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Fishing Tours
                    </h1>

                </div>
                <div id="special-packages"
                    // onClick={toggleSpecialPackagesModal}
                    className="group flex items-end justify-center flex-grow w-40 max-w-xl max-h-[rem] m-4 rounded-lg shadow hover:scale-90 hover:duration-150 cursor-pointer">
                    <h1 className="group-hover:-translate-y-12 group-hover:duration-300">
                        Cycling Tours
                    </h1>

                </div>
                </div>
        </>
    )
}

export default AdventureCards;