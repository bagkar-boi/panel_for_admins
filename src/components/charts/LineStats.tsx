"use client";

import React, { useMemo } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    LabelList,
} from "recharts";

const LineStats = React.memo(() => {
    const data = useMemo(() => [
        { month: "Jan", visits: 400 },
        { month: "Feb", visits: 600 },
        { month: "Mar", visits: 500 },
        { month: "Apr", visits: 900 },
        { month: "May", visits: 700 },
        { month: "Jun", visits: 1200 },
    ], []);

    return (
        <>
            <h2 className="text-xl font-semibold text-center mb-4">Monthly Site Visits</h2>
            <div style={{ width: "100%", height: 300, display: "flex", justifyContent: "center" }}>
                <ResponsiveContainer width="80%" height={300}>
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis
                            label={{
                                value: "Visits",
                                angle: -90,
                                position: "insideLeft",
                                style: { textAnchor: "middle" },
                            }}
                        />
                        <Tooltip
                            contentStyle={{ fontFamily: "Poppins, sans-serif" }}
                            formatter={(value: any) => [`${value} visits`, "Users"]}
                        />
                        <Line
                            type="monotone"
                            dataKey="visits"
                            stroke="#ff7300"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                            isAnimationActive={true}
                        >
                            <LabelList dataKey="visits" position="top" fill="#555" />
                        </Line>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
});

export default LineStats;
