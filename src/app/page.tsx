'use client';
import AnyButton from "@/components/AnyButton";
import styles from "./page.module.css";
import WorkspaceTable from "@/components/WorkspaceTable";

export default function Home() {
  return (
    <div className={styles.workspace_div}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AnyButton url="https://app.onstro.dev/tenants/register-me" text="Create Workspace" />
        </div>
        <h1 style={{textAlign: "center", color: "#021F65"}}>Workspaces</h1>
      <div className={styles.main_page_list}>
        <h2 style={{ display:"inline", color: "#021F65"}}>Your Workspaces</h2>
        <WorkspaceTable />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <AnyButton url="https://www.onstro.com" text="Go to Home" self={true}/>
      </div>
    </div>
  );
}