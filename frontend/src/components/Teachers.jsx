import React from 'react'
import { teachersData } from '../../lib/data'

export default function Teachers() {
    return (
        <div className='flex flex-col gap-2 p-4 bg-white rounded-xl text-zinc-700 my-4'>
            {
                teachersData.map((item,index) => (
                    <div key={index} className='flex flex-row justify-between border items-center px-4 py-2 rounded bg-green-50'>
                        <div className='bg-blue-400 rounded-full w-8 h-8 text-white flex justify-center items-center'>A</div>
                        <div>
                            <p className='font-bold'>{item.name}</p>
                            <p className='text-xs '>{item.email }</p>
                        </div>
                        <p>{item.teacherId}</p>
                        <p>{item.subjects}</p>
                        <p>{item.classes}</p>
                        <p>{item.phone}</p>
                        <p className='text-xs'>{item.address}</p>
                    </div>
                ))
            }
        </div>
    )
}
