import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuMessageCircleMore } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";

export default function Topbar() {
    return (
        <div className='flex justify-between w-full h-10 items-center px-6  my-2'>
            <div className='flex flex-row items-center gap-4 rounded-full border-2 p-2'>
                <CiSearch></CiSearch>
                <input type="text" placeholder='search..' className='bg-transparent outline-none'/>
            </div>
            <div className='flex flex-row items-center gap-6'>
                <LuMessageCircleMore className='text-zinc-600'></LuMessageCircleMore>
                <div className='relative'>
                    <GrAnnounce className='text-zinc-600'></GrAnnounce>
                    {/* <p className='bg-violet-600 flex justify-center items-center rounded-full w-4 h-4 text-white sticky '>3</p> */}
                </div>

                <div>
                    <p className='text-sm text-slate-600 font-bold'>Jhon Doe</p>
                    <p className='text-xs'>Admin</p>
                </div>
                <p className='bg-red-500 p-1 h-6 w-6  flex justify-center items-center text-white rounded-full'>A</p>
            </div>
        </div>
    )
}
