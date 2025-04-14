"use client";

import { Table, Button, message, Modal, Tooltip } from "antd";
import { ImportOutlined, PaperClipOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Searcher from "./Searcher";
import Filters from "./Filters";
import { Moment } from 'moment';
import moment from "moment";
import { ColumnsType } from "antd/es/table";
//import "@/app/workspace.module.css"

interface Workspace {
    key: string;
    name: string;
    date: Moment;
    website: string;
    phone: number;
    email: string;
    status: string;
    archived: boolean;
}

const workspaces: Workspace[] = [
<<<<<<< HEAD
    {key: "1", name: "Gemini Works", date: moment("25/09/2020", "DD-MM-YYYY"), website: "https://my-site.com", phone: 4346287823, email: "abcd@exam.com", status: "Subscribed", archived: false},
    {key: "2", name: "Kita Kita", date: moment("23/04/2017", "DD-MM-YYYY"), website: "https://his-site.com", phone: 2183421434, email: "efgh@xamp.com", status: "Free", archived: false},
    {key: "3", name: "The One above All", date: moment("10/11/2019", "DD-MM-YYYY"), website: "https://her-site.com", phone: 3989654522, email: "ijkl@ampl.com", status: "Subscribed", archived: false},
    {key: "4", name: "Zero Mortal Plan", date: moment("15/10/2025", "DD-MM-YYYY"), website: "https://their-site.com", phone: 5872354324, email: "mnop@mple.com", status: "Free", archived: false},
    {key: "5", name: "Subject #5672", date: moment("09/01/2021", "DD-MM-YYYY"), website: "https://its-site.com", phone: 1918423422, email: "qrst@plee.com", status: "Subscribed", archived: false},
=======
    {key: "1", name: "Gemini Works", date: moment("25/09/2020", "DD-MM-YYYY"), website: "https://my-site.com", phone: 4346287823, email: "abcd@exam.com", status: "Premium", archived: false},
    {key: "2", name: "Kita Kita", date: moment("23/04/2017", "DD-MM-YYYY"), website: "https://his-site.com", phone: 2183421434, email: "efgh@xamp.com", status: "Free", archived: false},
    {key: "3", name: "The One above All", date: moment("10/11/2019", "DD-MM-YYYY"), website: "https://her-site.com", phone: 3989654522, email: "ijkl@ampl.com", status: "Premium", archived: false},
    {key: "4", name: "Zero Mortal Plan", date: moment("15/10/2025", "DD-MM-YYYY"), website: "https://their-site.com", phone: 5872354324, email: "mnop@mple.com", status: "Free", archived: false},
    {key: "5", name: "Subject #5672", date: moment("09/01/2021", "DD-MM-YYYY"), website: "https://its-site.com", phone: 1918423422, email: "qrst@plee.com", status: "Premium", archived: false},
>>>>>>> 2e00c26 (hw)
]

export default function WorkspaceTable() {
    const router = useRouter();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace | null>(null);
    const [searchText, setSearchText] = useState("");
    const [filterStatus, setFilterStatus] = useState('all');

    const handleSearch = (value: string) => {
        setSearchText(value.toLowerCase());
    };

    const handleFilterChange = (value: string) => {
        setFilterStatus(value)
    }

    const filteredWorkspaces = workspaces.filter(workspace => {
        const matchedSearch = workspace.name.toLowerCase().includes(searchText);
        const matchedFilter = 
            filterStatus === 'all' || 
            (filterStatus === 'archived' && workspace.archived) ||
            (filterStatus === 'unarchived' && !workspace.archived);

        return matchedSearch && matchedFilter;
    });

    const handleArchive = () => {
        if (selectedWorkspace?.archived === true) {
            selectedWorkspace.archived = false;
            message.success(`${selectedWorkspace.name} has been sucessfully unarchived.`);
        } else if (selectedWorkspace?.archived === false) {
            selectedWorkspace.archived = true;
            message.success(`${selectedWorkspace.name} has been sucessfully archived.`);
        }
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
      };

    const showDeleteModal = (workspace: Workspace) => {
        setSelectedWorkspace(workspace);
        setIsModalVisible(true);
    }

    const columns: ColumnsType<Workspace> = [
        {
            title: "Workspace Name",
            dataIndex: "name",
            key: "name",
            render: (text: string, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                    <span
<<<<<<< HEAD
                        style={{ cursor: "pointer", color: record.archived ? "red" : "#000", /*fontWeight: record.archived ? "bold" : "normal"*/ }}
=======
                        style={{  color: record.archived ? "red" : "#000", /*fontWeight: record.archived ? "bold" : "normal"*/ }}
>>>>>>> 2e00c26 (hw)
                         onClick={() => router.push(`/${record.key}/panel?name=${encodeURIComponent(record.name)}`)}
                    >
                    {text}
                    </span>
                </Tooltip>
            ),
<<<<<<< HEAD
            sorter: (a: { name: string; }, b: { name: string; }) => a.name.length - b.name.length,
=======
            sorter: (a, b) => a.name.localeCompare(b.name),
            onCell: (record: Workspace) => ({
                onClick: () => {
                    localStorage.setItem("workspace", JSON.stringify(record));
                    router.push(`/${record.key}/panel/`);
                }
            })
>>>>>>> 2e00c26 (hw)
        },  
        {
            title: "Created On",
            key: "date",
            dataIndex: "date",
<<<<<<< HEAD
            render: (_: any, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{
                        cursor: "pointer", 
=======
            render: (_, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{
                         
>>>>>>> 2e00c26 (hw)
                        color: record.archived ? "red" : "#000", 
                        //fontWeight: record.archived ? "bold" : "normal" 
                    }}
                    onClick={() => router.push(`/${record.key}/panel?name=${encodeURIComponent(record.name)}`)}
                >
                    {record.date.format("DD/MM/YYYY")}
                </span>
                </Tooltip>
            ),
<<<<<<< HEAD
=======
            onCell: (record: Workspace) => ({
                onClick: () => {
                    localStorage.setItem("workspace", JSON.stringify(record));
                    router.push(`/${record.key}/panel/`);
                }
            }),
>>>>>>> 2e00c26 (hw)
            sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix()
        },
        {
            title: "Website",
            key: "website",
            dataIndex: "website",
<<<<<<< HEAD
            render: (_: any, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        cursor: "pointer",
=======
            render: (_, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        
>>>>>>> 2e00c26 (hw)
                        color: record.archived ? "red" : "#000", 
                        //fontWeight: record.archived ? "bold" : "normal" 
                    }}
                    onClick={() => router.push(`/${record.key}/panel?name=${encodeURIComponent(record.name)}`)}
                >
                    {record.website}
                </span>
                </Tooltip>
<<<<<<< HEAD
            )
=======
            ),
            onCell: (record: Workspace) => ({
                onClick: () => {
                    localStorage.setItem("workspace", JSON.stringify(record));
                    router.push(`/${record.key}/panel/`);
                }
            })
>>>>>>> 2e00c26 (hw)
        },
        {
            title: "Phone number",
            key: "phone",
            dataIndex: "phone",
<<<<<<< HEAD
            render: (_: any, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        cursor: "pointer",
=======
            render: (_, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        
>>>>>>> 2e00c26 (hw)
                        color: record.archived ? "red" : "#000", 
                        //fontWeight: record.archived ? "bold" : "normal" 
                    }}
                    onClick={() => router.push(`/${record.key}/panel?name=${encodeURIComponent(record.name)}`)}
                >
                    {record.phone}
                </span>
                </Tooltip>
<<<<<<< HEAD
            )
=======
            ),
            onCell: (record: Workspace) => ({
                onClick: () => {
                    localStorage.setItem("workspace", JSON.stringify(record));
                    router.push(`/${record.key}/panel/`);
                }
            })
>>>>>>> 2e00c26 (hw)
        },
        {
            title: "Email",
            key: "email",
            dataIndex: "email",
<<<<<<< HEAD
            render: (_: any, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        cursor: "pointer",
=======
            render: (_, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        
>>>>>>> 2e00c26 (hw)
                        color: record.archived ? "red" : "#000", 
                        //fontWeight: record.archived ? "bold" : "normal" 
                    }}
                    onClick={() => router.push(`/${record.key}/panel?name=${encodeURIComponent(record.name)}`)}
                >
                    {record.email}
                </span>
                </Tooltip>
<<<<<<< HEAD
            )
=======
            ),
            onCell: (record: Workspace) => ({
                onClick: () => {
                    localStorage.setItem("workspace", JSON.stringify(record));
                    router.push(`/${record.key}/panel/`);
                }
            })
>>>>>>> 2e00c26 (hw)
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
<<<<<<< HEAD
            render: (_: any, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        cursor: "pointer",
                        color: record.archived ? "red" : "#000", 
                        fontStyle: !record.archived && record.status === "Subscribed" ? "italic" : "normal" 
=======
            render: (_, record: Workspace) => (
                <Tooltip title="Click to view workspace details" placement="top">
                <span 
                    style={{ 
                        
                        color: record.archived ? "red" : "#000", 
                        fontStyle: !record.archived && record.status === "Premium" ? "italic" : "normal" 
>>>>>>> 2e00c26 (hw)
                    }}
                    onClick={() => router.push(`/${record.key}/panel?name=${encodeURIComponent(record.name)}`)}
                >
                    {record.status}
                </span>
                </Tooltip>
            ),
            sorter: (a: { status: string; }, b: { status: string; }) => a.status.length - b.status.length,
<<<<<<< HEAD
=======
            onCell: (record: Workspace) => ({
                onClick: () => {
                    localStorage.setItem("workspace", JSON.stringify(record));
                    router.push(`/${record.key}/panel/`);
                }
            })
>>>>>>> 2e00c26 (hw)
        },
        {
            title: "Actions",
            key: "actions",
<<<<<<< HEAD
            render: (_: any, record: Workspace) => (
=======
            render: (_, record: Workspace) => (
>>>>>>> 2e00c26 (hw)
                <Tooltip title={record.archived ? "Unarchive this workspace" : "Archive this workspace"} placement="top">
                    {record.archived ? <Button danger icon={<ImportOutlined />} onClick={() => showDeleteModal(record)} style={{color: "red", fontSize: "150%"}} />: <Button danger icon={<PaperClipOutlined />} onClick={() => showDeleteModal(record)} style={{ fontSize: "150%"}} />}
                </Tooltip>
            ),
            width: "1%",
        },
    ];

    return (
    <>
        <div>
            <Searcher onSearch={handleSearch} />
            <Filters onFilterChange={handleFilterChange} />
        </div>
        
        <Table
            columns={columns} 
            dataSource={filteredWorkspaces} 
            bordered
            pagination={filteredWorkspaces.length > 10 ? { pageSize: 10 } : false} 
            rowKey="id" 
<<<<<<< HEAD
            style={{ fontFamily: "Poppins, sans-serif" }} 
=======
            style={{ fontFamily: "Poppins, sans-serif", cursor: "pointer"}} 
            onHeaderRow={() => {
                return {
                  style: { cursor: "default" },
                };
            }}
>>>>>>> 2e00c26 (hw)
        />
        <Modal
            title="Confirm decision"
            open={isModalVisible}
            onOk={handleArchive}
            onCancel={handleCancel}
            okText="Yes"
            okButtonProps={{ danger: true }}
            style={{ fontFamily: "Poppins, sans-serif" }} 
        >
            {selectedWorkspace?.archived ? <p>Are you sure you want to unarchive <b>{selectedWorkspace?.name}</b>?</p> : <p>Are you sure you want to archive <b>{selectedWorkspace?.name}</b>?</p>}
        </Modal>
    </>
    )
}

