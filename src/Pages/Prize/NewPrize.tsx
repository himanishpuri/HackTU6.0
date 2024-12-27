import React from 'react'

const NewPrize = () => {
  return (
    <>
    <div className='justify-center flex'>
        <h1 className="text-[100px] text-[#D1FAE5] mt-[120px] font-extrabold tracking-normal absolute">PRIZES</h1>
        <h1 className="text-[150px] text-[#D1FAE5] opacity-10 font-extrabold tracking-normal">PRIZES</h1>
    </div>
        <div className='h-screen w-full flex bg-[#0F203E] justify-center items-center p-9'>
            <div className='left h-[70%] w-[50%] p-9'>
                <div className='h-[55%] w-full bg-[#7AB7E0] p-9 rounded-2xl'>
                <div className='flex justify-center font-semibold text-8xl text-white text-[#e6e6e6] opacity-1 font-extrabold tracking-normal'>
                        ₹5,00,000
                </div>
                <h1 className='flex justify-center font-semibold text-6xl text-white text-[#e6e6e6] opacity-1 font-extrabold tracking-normal'>POOL PRIZE</h1>
                </div>
                <div className='flex h-full w-ful gap-4 mb-9 mt-4'>
                    <div className='h-[45%] w-[50%] bg-[#c5b89b] rounded-2xl justify-center text-4xl font-semibold text-white'>
                        <div>
                            <h1 className='w-full h-9 flex justify-center mt-5 font-semibold text-[#e6e6e6] tracking-normal'>BEST FIRST</h1>
                            <h1 className='w-full h-9 flex justify-center font-bold text-[#e6e6e6] '>YEAR HACK</h1>
                        </div>
                        <div className='flex justify-center font-semibold mt-4 text-6xl text-[#7e433e] opacity-8 tracking-normal'>
                        ₹10,000
                        </div>
                    </div>
                    <div className='h-[45%] w-[50%] bg-[#f5c5cd] rounded-2xl justify-center text-4xl font-semibold text-white'>
                        <div>
                            <h1 className='w-full h-9 flex justify-center mt-5 font-semibold  text-[#e6e6e6]'>BEST ALL</h1>
                            <h1 className='w-full h-9 flex justify-center font-bold text-[#e6e6e6]'>GIRLS TEAM</h1>
                        </div>
                        <div className='flex justify-center text-[#FF71AD] font-semibold mt-4 text-6xl'>
                        ₹10,000
                        </div>
                    </div>
                </div>
            </div>
            <div className='right h-[70%] w-[40%] px-5 py-6'>
                <div className='h-1/3 bg-[#ffc737] rounded-2xl'>
                <div className='flex'>
                    <img className='h-[19vh] w-[10vw] object-fit-cover' 
                    src="https://static.vecteezy.com/system/resources/previews/028/592/471/non_2x/1st-prize-trophy-hand-drawn-education-icon-free-png.png"
                     alt="" />
                    <h1 className='flex items-center font-semibold mt-2 text-7xl text-[#d8ffc6]'>₹70,000</h1>
                </div>
                </div>
                <div className='h-1/3 bg-[#c0c0c0] rounded-2xl mt-3 flex'>
                    <img className='h-[16vh] ml-5 w-[7vw] mt-2 object-fit-cover' 
                    src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/2nd-prize-icon.png"
                     alt="" />
                    <h1 className='flex items-center font-semibold mt-2 ml-6 text-7xl text-[#fffafa]'>₹50,000</h1>
                </div>
                <div className='h-1/3 bg-[#774640] rounded-2xl mt-3 flex justify-center'>
                    <h1 className='flex items-center font-semibold mt-2 text-7xl text-[#e6e6e6] ml-[5vw]'>₹50,000</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewPrize
