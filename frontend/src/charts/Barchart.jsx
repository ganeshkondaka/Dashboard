import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import React from 'react'

export default function Barchart() {

    const data = [
        {
            name: "Mon",
            present: 60,
            absent: 40,
        },
        {
            name: "Tue",
            present: 70,
            absent: 60,
        },
        {
            name: "Wed",
            present: 90,
            absent: 75,
        },
        {
            name: "Thu",
            present: 90,
            absent: 75,
        },
        {
            name: "Fri",
            present: 65,
            absent: 55,
        },
        {
            name: "sat",
            present: 75,
            absent: 45,
        },
    ];

    return (
        <div className="h-full p-4 rounded-lg bg-white">
            <div className='flex justify-between items-center'>
                <p className='text-lg font-bold' > Students</p>
                <p className='text-lg font-bold text-zinc-600' > ...</p>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#65b3de" }}
                        tickLine={false}
                    />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip
                        contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
                    />
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                    />
                    <Bar
                        dataKey="present"
                        fill="#93c5fd"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill="#C3EBFA"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
