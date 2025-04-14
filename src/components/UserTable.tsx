"use client";

import { Table, Button, message, Modal, Tooltip } from "antd";
import { ImportOutlined, PaperClipOutlined, DeleteOutlined, UserDeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface User {
    key: number;
    name: string;
    email: string;
    phone: number;
    archived: boolean;
    deleted: boolean;
    blocked: boolean;
}

const users: User[] = [
    {key: 1, name: "Jonathan Joestar", email: "jojo1@speedwagonfoundation.com", phone: 1204041868, archived: false, deleted: false, blocked: false},
    {key: 2, name: "Joseph Joestar", email: "jojo2@speedwagonfoundation.com", phone: 1227091920, archived: false, deleted: false, blocked: false},
    {key: 3, name: "Jotaro Kujo", email: "jojo3@speedwagonfoundation.com", phone: 1203021971, archived: false, deleted: false, blocked: false},
    {key: 4, name: "Josuke Higashikata", email: "jojo4@moriohmails.com", phone: 1220061983, archived: false, deleted: false, blocked: false},
    {key: 5, name: "Giorno Giovanna", email: "jojo5@passione.com", phone: 1216041985, archived: false, deleted: false, blocked: false},
    {key: 6, name: "Jolyne Cujoh", email: "jojo6@speedwagonfoundation.com", phone: 1209021992, archived: false, deleted: false, blocked: false},
];

export default function UserTable() {
    const router = useRouter();

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userAction, setUserAction] = useState<number | null>(null);

    const showModal = (user: User, action: number) => {
        setUserAction(action);
        setSelectedUser(user);
        setIsModalVisible(true);
    }

    const handleArchive = () => {
        if (selectedUser?.archived === true) {
            selectedUser.archived = false;
            message.success(`${selectedUser.name} has been sucessfully unarchived.`);
        } else if (selectedUser?.archived === false) {
            selectedUser.archived = true;
            message.success(`${selectedUser.name} has been sucessfully archived.`);
        }
        setIsModalVisible(false);
    };

    const handleBlock = () => {
        if (selectedUser?.blocked === true) {
            selectedUser.blocked = false;
            message.success(`${selectedUser.name} has been sucessfully unblocked.`);
        } else if (selectedUser?.blocked === false) {
            selectedUser.blocked = true;
            message.success(`${selectedUser.name} has been sucessfully blocked.`);
        }
        setIsModalVisible(false);
    };

    const handleDelete = () => {
        if (selectedUser?.deleted === false) {
            selectedUser.deleted = true;
            message.success(`${selectedUser.name} has been sucessfully deleted.`);
            delete users[selectedUser.key - 1];
        }
        console.log(users);
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const renderConfirmationMessage = () => {
        if (selectedUser?.archived && userAction === 1) {
          return (
            <p>
              Are you sure you want to unarchive <b>{selectedUser.name}</b>?
            </p>
          );
        }
      
        if (selectedUser?.archived === false && userAction === 1) {
          return (
            <p>
              Are you sure you want to archive <b>{selectedUser.name}</b>?
            </p>
          );
        }

        if (selectedUser?.blocked === false && userAction === 2) {
            return (
              <p>
                Are you sure you want to block <b>{selectedUser.name}</b>?
              </p>
            );
        }

        if (selectedUser?.blocked && userAction === 2) {
            return (
              <p>
                Are you sure you want to restore <b>{selectedUser.name}</b>?
              </p>
            );
        }
      
        return (
          <p>
            Are you sure you want to delete the user <b>{selectedUser?.name}</b>? This action is <b>irreversible</b>.
          </p>
        );
      };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (_: any, user: User) => (
                <span style={{ 
                    color: user.archived ? "red" : user.blocked ? "grey" : "#000",
                    textDecoration: user.blocked ? "line-through" : "none",
                }}
                >
                {user.name}
                </span>
            ),
            onCell: (record: User) => ({
                onClick: () => {
                    localStorage.setItem("user", JSON.stringify(record));
                    router.push(`/contacts/${record.key}/`);
                }
            })
        },
        {
            title: "Email Address",
            dataIndex: "email",
            key: "email",
            render: (_: any, user: User) => (
                <span style={{ 
                    color: user.archived ? "red" : user.blocked ? "grey" : "#000",
                    textDecoration: user.blocked ? "line-through" : "none",
                }}
                >
                    {user.email}
                </span>
            ),
            onCell: (record: User) => ({
                onClick: () => {
                    localStorage.setItem("user", JSON.stringify(record));
                    router.push(`/contacts/${record.key}/`);
                }
            })
        },
        {
            title: "Contact No.",
            dataIndex: "phone",
            key: "phone",
            render: (_: any, user: User) => (
                <span style={{ 
                    color: user.archived ? "red" : user.blocked ? "grey" : "#000",
                    textDecoration: user.blocked ? "line-through" : "none",
                }}
                >
                    {user.phone}
                </span>
            ),
            onCell: (record: User) => ({
                onClick: () => {
                    localStorage.setItem("user", JSON.stringify(record));
                    router.push(`/contacts/${record.key}/`);
                }
            })
        }, 
        {
            title: "Actions",
            key: "actions",
            render: (_: any, user: User) => (
                <>
                    <Tooltip title={user.archived ? "Unarchive this user" : "Archive this user"} placement="top">
                        {user.archived ? <Button icon={<ImportOutlined />} onClick={() => showModal(user, 1)} style={{color: "red", fontSize: "150%", margin: "5px", display: "inline"}} />: <Button icon={<PaperClipOutlined />} onClick={() => showModal(user, 1)} style={{ fontSize: "150%", margin: "5px", display: "inline"}} />}
                    </Tooltip>
                    <Tooltip title={user.blocked ? "Unblock this user" : "Block this user"} placement="top">
                        {user.blocked ? <Button icon={<UserAddOutlined />} onClick={() => showModal(user, 2)} style={{fontSize: "150%", margin: "5px", display: "inline"}} />: <Button danger icon={<UserDeleteOutlined />} onClick={() => showModal(user, 2)} style={{ fontSize: "150%", margin: "5px", display: "inline"}} />}
                    </Tooltip>
                    <Tooltip title="Delete this user" placement="top">
                        <Button danger icon={<DeleteOutlined />} onClick={() => showModal(user, 3)} style={{color: "red", fontSize: "150%", margin: "5px"}} />
                    </Tooltip>
                </>
            ),
        }
    ]

    return (
        <>
            <Table 
                columns={columns}
                dataSource={users}
                bordered
                pagination={users.length > 10 ? { pageSize: 10 } : false} 
                rowKey="id" 
                style={{ fontFamily: "Poppins, sans-serif", cursor: "pointer" }}
                onHeaderRow={() => {
                    return {
                      style: { cursor: "default" },
                    };
                }} 
            />

            <Modal
                title="Confirm decision"
                open={isModalVisible}
                onOk={userAction === 1 ? handleArchive : userAction === 3 ? handleDelete : handleBlock}
                onCancel={handleCancel}
                okText="Yes"
                okButtonProps={{ danger: true }}
                style={{ fontFamily: "Poppins, sans-serif" }} 
            >
                {renderConfirmationMessage()}
            </Modal>
        </>
    )
}


// {users.archived ? }

//                 <span style={{ 
//                     color: user.archived ? "red" : "#000",
//                 }}
//                 >
//                 {user.name}
//                 </span>