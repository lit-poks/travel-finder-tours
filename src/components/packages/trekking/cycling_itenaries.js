import cycling_first from '../../../assets/cycling_first.jpeg'
import cycling_second from '../../../assets/cycling_second.jpeg'

function CyclingItenaries() {
    return (
        <div id='cyclingElement' className="flex flex-col">
            <div id="cycling-container" className="flex flex-col">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="backdrop-blur-sm p-8 rounded-full">
                        <p className="text-8xl text-red-800 tracking-widest"> Cycling </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col shadow-xl my-10">
                <div className='flex justify-center items-center'>
                    <img src={cycling_second} alt="Culltural Tours" className='w-full max-h-[45rem] object-cover object-center' />
                </div>
                <div className="flex flex-col basis-1/2 justify-center items-center text-xl text-grey-800 p-10">
                    <p>
                        Bhutan offers diverse cycling opportunities with varying terrain and levels of difficulty. While the entire country is picturesque, some regions stand out as having better cycling tracks:<br /><br />
                    </p>
                    <p className='pb-4'>
                        <strong>Paro to Thimphu:</strong> This route is a popular choice for cyclists, offering well-maintained roads, relatively gentle gradients, and stunning views. The Paro-Thimphu highway is known for its accessibility and scenic beauty.
                    </p>
                    <p className='pb-4'>
                        <strong>Punakha Valley: </strong> Cycling in the Punakha Valley is a delightful experience. The roads are generally in good condition, and you can explore the valley's rich cultural and natural attractions, including Punakha Dzong and Chimi Lhakhang.
                    </p>
                    <p className='pb-4'>
                        <strong>Bumthang Valley:</strong> Bumthang is known for its serene landscapes and cultural significance. While it offers challenging climbs, the valley's beauty and the opportunity to explore ancient monasteries like Jakar Dzong and Jambay Lhakhang make it a rewarding destination for cyclists.
                    </p>
                    <p className='pb-4'>
                        <strong>Phobjikha Valley:</strong> Phobjikha Valley is a haven for nature enthusiasts and cyclists alike. The valley is relatively flat and surrounded by mountains, providing a peaceful and picturesque cycling experience. It's also home to the Black-necked Crane Information Center.
                    </p>
                    <p className='pb-4'>
                        <strong>Gangtey Valley:</strong> The ride to Gangtey Valley offers beautiful scenery, and the valley itself is a great place to explore on two wheels. Gangtey Monastery and the pristine environment make it an appealing destination.
                    </p>
                    <p className='pb-4'>
                        <strong>Trongsa to Bumthang:</strong> The route from Trongsa to Bumthang involves some challenging climbs but rewards cyclists with breathtaking views and cultural experiences. The road passes through Yotong La Pass, providing a sense of accomplishment for riders.
                    </p>
                    <p className='pb-4'>
                        <strong>Dochula Pass:</strong> While not a destination itself, Dochula Pass is a must-visit high-altitude point along the Thimphu-Punakha highway. Cyclists can enjoy panoramic views of the Himalayas here.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CyclingItenaries;