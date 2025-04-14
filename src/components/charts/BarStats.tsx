"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const data = [
    { name: "Jan", employees: 10 },
    { name: "Feb", employees: 15 },
    { name: "Mar", employees: 8 },
    { name: "Apr", employees: 20 },
    { name: "May", employees: 12 },
];

export default function BarStats() {
    return (
        <>
                <h2 className="text-xl font-semibold text-center mb-4">Employee Stats</h2>
                <div style={{ width: "100%", height: 300, display: "flex", justifyContent: "center" }}>
                    <ResponsiveContainer width="80%" height={300}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 30 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis label={{ value: "Count", angle: -90, position: "insideLeft" }} />
                            <Tooltip
                                contentStyle={{ fontFamily: "Poppins, sans-serif" }}
                                formatter={(value: any) => [`${value} employees`, "Total"]}
                            />
                            <Bar dataKey="employees" fill="#1890ff" radius={[6, 6, 0, 0]}>
                                <LabelList dataKey="employees" position="top" fill="#333" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
        </>
    );
}
