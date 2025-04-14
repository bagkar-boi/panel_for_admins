"use client";

import WorkspaceForm from "@/components/WorkspaceForm";
import AnyButton from "@/components/AnyButton";
import BarStats from "@/components/charts/BarStats";
import PieStats from "@/components/charts/PieStats";
import UserTable from "@/components/UserTable";
import LineStats from "@/components/charts/LineStats";
import { useEffect, useState } from "react";

export default function WorkspacePanelPage() {
  const [name, setName] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('workspace');
    if (stored) {
      const parsed = JSON.parse(stored);
      setName(parsed.name);
    }
  }, []);
  
  return (
    
    <div>
      <h1 style={{ textAlign: "center", marginTop: "0", padding: "10px" }}>{name}</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          justifyContent: "space-around",
          padding: "20px",
      
        }}
      >
        <div style={{ width: "50%" }}>
          <BarStats />
          <LineStats />
          <PieStats />
          {/* <BarChart />
          <PieChart />
          <LineChart /> */}
        </div>

        <div>
          <h2>Workspace details</h2>
          <WorkspaceForm />
          <br />
          <h2>Employees currently assigned to the workspace</h2>
          <UserTable />
          <br />
          <AnyButton url="/" text="Go Back" self={true} />
        </div>
      </div>
    </div>
  );
}
