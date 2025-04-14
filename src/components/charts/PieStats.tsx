"use client";

import React, { useMemo } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#860075", "#FFBB28", "#FF8042"];

const PieStats = React.memo(() => {
    const data = useMemo(() => [
        { name: "Documents", value: 400 },
        { name: "Media", value: 300 },
        { name: "Tools", value: 200 },
        { name: "Other", value: 100 },
    ], []);

    return (
        <>
            <h2 className="text-xl font-semibold text-center mb-4">
                Resource Distribution in Workspace
            </h2>
            <div style={{ width: "100%", height: 300, display: "flex", justifyContent: "center" }}>
                <ResponsiveContainer width="70%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label={({ name, percent }) =>
                                `${name}: ${(percent * 100).toFixed(0)}%`
                            }
                            isAnimationActive={true}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: number, name: string) => [`${value} files`, name]}
                            contentStyle={{ fontFamily: "Poppins, sans-serif" }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            wrapperStyle={{ fontFamily: "Poppins, sans-serif" }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
});

export default PieStats;
