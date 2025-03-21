import React from 'react'
import UserCard from './UserCard'
import Countchart from '../charts/Countchart'
import Barchart from '../charts/Barchart'
import Linechart from '../charts/Linechart'
import Eventcalender from '../charts/Eventcalender'
import Announcements from '../charts/Announcements'

export default function One() {
  return (
    <div className='grid grid-cols-3 gap-2 h-full'>
      <div className='col-span-2  p-2 space-y-4'>
        <div className='flex flex-row h-auto justify-evenly'>
          <UserCard type={"students"}></UserCard>
          <UserCard type={"Parents"}></UserCard>
          <UserCard type={"teachers"}></UserCard>
          <UserCard type={"staff"}></UserCard>
        </div>
        <div className='flex flex-row gap-6'>
          <div className="w-1/3 h-[400px]">
            <Countchart />
          </div>
          <div className='w-2/3 h-[400px] '>
            <Barchart></Barchart>
          </div>
        </div>
        <div className='h-96 w-full'>
          <Linechart></Linechart>
        </div>
      </div>
      <div className=' h-full p-2'>
        <div className='h-20' >
          <Eventcalender></Eventcalender>
          <Announcements></Announcements>
        </div>
      </div>

    </div>
  )
}
