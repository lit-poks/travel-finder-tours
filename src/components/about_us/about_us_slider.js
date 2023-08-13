
function AboutUsSlider({ item, index, hello }) {
    return (
        <>
            <div className={`
            ${index != hello ? 'opacity-0 h-0 duration-0' : 'duration-1000 opacity-100 flex flex-col justify-center items-center basis-9/12 md:p-3 lg:p-0'}
            transition-all ease-in-out`} hidden={index == hello}>
                <h1 className='text-4xl pt-4 font-bold'>{item.header}</h1>
                <div className='basis-5/6 flex justify-center items-center mx-auto px-10 text-center'>
                    <p className='text-sm tracking-tight font-normal font-sans lg:text-base lg:font-medium xl:tracking-wider'>
                        {item.body}
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUsSlider;