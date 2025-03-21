import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

export default function Countchart() {

    const data = [
        {
            name: "Total",
            count: 106,
            fill: "skyblue",
        },
        {
            name: "Girls",
            count: 73,
            fill: "#FAE27C",
        },
        {
            name: "Boys",
            count: 53,
            fill: "#C3EB9A",
        },
        {
            name: "Boys",
            count: 93,
            fill: "#B3ABFA",
        },
    ];

    // return (
    //     <div className="bg-white rounded-xl w-full h-full p-4">
    //       {/* TITLE */}
    //       <div className="flex justify-between items-center">
    //         <h1 className="text-lg font-semibold">Students</h1>
    //         {/* <Image src="/moreDark.png" alt="" width={20} height={20} /> */}
    //       </div>
    //       {/* CHART */}
    //       <div className="relative w-full h-[75%]">
    //         <ResponsiveContainer>
    //           <RadialBarChart
    //             cx="50%"
    //             cy="50%"
    //             innerRadius="40%"
    //             outerRadius="100%"
    //             barSize={32}
    //             data={data}
    //           >
    //             <RadialBar background dataKey="count" />
    //           </RadialBarChart>
    //         </ResponsiveContainer>
    //         {/* <Image
    //           src="/maleFemale.png"
    //           alt=""
    //           width={50}
    //           height={50}
    //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    //         /> */}
    //       </div>
    //       {/* BOTTOM */}
    //       <div className="flex justify-center gap-16">
    //         <div className="flex flex-col gap-1">
    //           <div className="w-5 h-5 bg-lamaSky rounded-full" />
    //           <h1 className="font-bold">1,234</h1>
    //           <h2 className="text-xs text-gray-300">Boys (55%)</h2>
    //         </div>
    //         <div className="flex flex-col gap-1">
    //           <div className="w-5 h-5 bg-lamaYellow rounded-full" />
    //           <h1 className="font-bold">1,234</h1>
    //           <h2 className="text-xs text-gray-300">Girls (45%)</h2>
    //         </div>
    //       </div>
    //     </div>
    //   );


    return (
        <div className="bg-white rounded-lg p-2 w-full h-full">
            <div className='flex justify-between items-center'>
                <p className='text-lg font-bold' > Students</p>
                <p className='text-lg font-bold text-zinc-600' > ...</p>
            </div>
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <img src="/malefemale.png" width={40} height={40} alt=" male female" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>


            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaSky rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaYellow rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}
