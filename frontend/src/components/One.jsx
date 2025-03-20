import React from 'react'
import UserCard from './UserCard'
import Countchart from '../charts/Countchart'

export default function One() {
  return (
    <div className='grid grid-cols-3 gap-2 h-full'>
      <div className='col-span-2 border p-2 space-y-4'>
        <div className='flex flex-row h-auto justify-evenly'>
          <UserCard type={"students"}></UserCard>
          <UserCard type={"Parents"}></UserCard>
          <UserCard type={"teachers"}></UserCard>
          <UserCard type={"staff"}></UserCard>
        </div>
        <div className="w-full lg:w-1/3 h-[450px]">
            <Countchart />
          </div>
        <div>
          stats
        </div>
      </div>
      <div className='border h-full p-2'>
        calendar
      </div>
    </div>
  )
}
