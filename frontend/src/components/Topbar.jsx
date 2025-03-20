import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuMessageCircleMore } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";

export default function Topbar() {
    return (
        <div className='flex justify-between w-full h-10 items-center '>
            <div className='flex flex-row items-center gap-4 rounded border-2 px-2'>
                <CiSearch></CiSearch>
                <input type="text" placeholder='search..' />
            </div>
            <div className='flex flex-row items-center gap-3'>
                <LuMessageCircleMore></LuMessageCircleMore>
                <div className='relative'>
                    <GrAnnounce className=''></GrAnnounce>
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
