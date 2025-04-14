"use client";

import { Button } from "antd";

interface AnyButtonProps {
    url: string;
    text: string;
    self?: boolean;
}

export default function AnyButton({ url, text, self }: AnyButtonProps) {
    const handleClick = () => {
        self ? window.open(url, "_self", "noopener,noreferrer") : window.open(url, "_blank", "noopener,noreferrer")
    };

    return (
        <Button 
            type="primary" 
            onClick={handleClick}
            style={{
                padding: "15px",
                backgroundColor: "#021F65",
                color: "#FFF",
                fontFamily: "var(--font-poppins), sans-serif",
                margin: "10px",
                width: "auto",
                maxWidth: "200px"
            }}
        >
            {text}
        </Button>
    );
}