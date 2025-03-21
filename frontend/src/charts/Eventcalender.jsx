import React from 'react'
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


// TEMPORARY
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];


export default function Eventcalender() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                {/* <Image src="/moreDark.png" alt="" width={20} height={20} /> */}
            </div>
            <div className="flex flex-col gap-1">
                {events.map((event) => (
                    <div
                        className="p-2 rounded-md border-2 border-gray-100 border-t-4 odd:border-blue-300 even:border-blue-300"
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        <p className=" text-gray-400 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
