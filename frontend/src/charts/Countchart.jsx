import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

export default function Countchart() {

    const data = [
        {
            name: "Total",
            count: 106,
            fill: "white",
        },
        {
            name: "Girls",
            count: 53,
            fill: "#FAE27C",
        },
        {
            name: "Boys",
            count: 53,
            fill: "#C3EBFA",
        },
    ];

    return (
        <div>
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
        </div>
    )
}
