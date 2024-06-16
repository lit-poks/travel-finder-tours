import { useEffect, useState } from "react";


function Clock() {
    const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])
    return (
        <div className="flex flex-grow justify-center hidden lg:mt-72 lg:block lg:items-center md:items-start">
            <div className="relative border-1 rounded shadow-2xl font-mono lg:text-6xl md:text-6xl text-white flex">
                <div className="relative p-5">
                    <div className="absolute inset-0 grid grid-rows-2">
                        <div className="bg-gradient-to-br from-gray-800 to-black opacity-30"></div>
                        <div className="bg-gradient-to-br from-gray-700 to-black opacity-30"></div>
                    </div>

                    <span className="relative">{date.getHours() % 12 || 12}</span>
                </div>

                
                <div className="relative p-5">
                    
                    <div className="absolute inset-0 grid grid-rows-2">
                        <div className="bg-gradient-to-br from-gray-800 to-black opacity-25"></div>
                        <div className="bg-gradient-to-br from-gray-700 to-black opacity-25"></div>
                    </div>

                    <span className="relative">{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}</span>
                </div>

                <div className="relative p-5">
                    
                    <div className="absolute inset-0 grid grid-rows-2">
                        <div className="bg-gradient-to-br from-black to-gray-700 opacity-30"></div>
                        <div className="bg-gradient-to-br from-black to-gray-800 opacity-30"></div>
                    </div>

                    <span className="relative">{date.getHours() >= 12 ? 'PM' : 'AM'}</span>
                </div>
            </div>

        </div>
    )
}

export default Clock;