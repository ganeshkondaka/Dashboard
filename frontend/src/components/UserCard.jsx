import React from 'react'

export default function UserCard({type}) {
  return (
    <div className='min-w-[190px] rounded-xl odd:bg-yellow-200 even:bg-violet-200 p-4 h-28 space-y-1 '>
        <div className='flex justify-between text-white items-center'>
            <div className=' bg-white text-slate-500 text-[7px] rounded p-[2px] h-4'>2024/25</div>
            <div >...</div>
        </div>
        <div className='text-lg font-bold'>124</div>
        <div>{type}</div>
    </div>
  )
}
