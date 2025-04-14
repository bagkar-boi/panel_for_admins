"use client";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface SearcherProps {
    onSearch: (value: string) => void;
}

export default function Searcher({ onSearch }: SearcherProps) {
    return (
        <Input
            placeholder="Search Workspaces..."
            prefix={<SearchOutlined />}
            allowClear
            onChange={(e) => onSearch(e.target.value)}
            style={{ marginBottom: "16px", width: "300px", float: "right" }}
        />
    );
}