import React from 'react'

function Numbers() {
  return (
    <div className='flex justify-center items-center gap-1 mt-12 mb-24'>
    <button className='flex justify-center items-center gap-1'>
        <div className='flex justify-center items-center pb-1 border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px] text-[29px]'>←</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#01CD7D] text-[#01CD7D] w-[42px] h-[42px]'>1</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px]'>2</div>
        <div className='flex justify-center items-center text-[#C0C9D7] text-[17px]'>...</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px]'>23</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px]'>24</div>
        <div className='flex justify-center items-center pb-1 border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px] text-[29px]'>→</div>
    </button>
    </div>
  )
}

export default Numbers