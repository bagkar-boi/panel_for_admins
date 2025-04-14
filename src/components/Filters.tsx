"use client";

import { Select } from "antd";

interface FilterProps {
    onFilterChange: (value: string) => void;
}

export default function Filters({ onFilterChange }: FilterProps) {
    return (
        <Select
            defaultValue="all"
            style={{ width: 200, marginBottom: "16px", float: "right", marginRight: "36px" }}
            onChange={onFilterChange}
            options={[
                { value: "all", label: "All Workspaces" },
                { value: "archived", label: "Archived" },
                { value: "unarchived", label: "Unarchived" }
            ]}
        />
    );
}
