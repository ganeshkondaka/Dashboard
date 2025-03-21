import React from 'react'

export default function UserCard({type}) {
  return (
    <div className='min-w-[190px] rounded-xl odd:bg-blue-300 even:bg-pink-300 p-4 h-28 space-y-1 '>
        <div className='flex justify-between items-center '>
            <div className=' bg-white text-slate-500 text-[7px] rounded p-[2px] h-4'>2024/25</div>
            <div className='text-white'>...</div>
        </div>
        <div className='text-lg font-bold'>124</div>
        <div>{type}</div>
    </div>
  )
}
