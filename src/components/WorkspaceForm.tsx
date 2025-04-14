"use client";

import { useEffect, useState } from "react";
import { Input, Form, Alert, Button, Tooltip, Select, Radio } from "antd";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import moment, { Moment } from "moment-timezone";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

export default function ContactValidationForm() {
  
  const [table, setTable] = useState(null);
  const [fields, setFields] = useState({
    email: { value: "", editing: false, error: "" },
    phone: { value: "", editing: false, error: "" },
    url: { value: "", editing: false, error: "" },
    timezone: { value: "Asia/Karachi", editing: false, error: "" },
    subscription: { value: "Free", editing: false, error: "" },
  });
  
  useEffect(() => {
    const stored = localStorage.getItem('workspace');
    if (stored) {
      const parsed = JSON.parse(stored);
      setTable(parsed);
  
      setFields({
        email: { value: parsed.email || "", editing: false, error: "" },
        phone: { value: parsed.phone || "", editing: false, error: "" },
        url: { value: parsed.website || "", editing: false, error: "" },
        timezone: { value: parsed.timezone || "Asia/Karachi", editing: false, error: "" },
        subscription: { value: parsed.status || "Free", editing: false, error: "" },
      });
    }
  }, []);

  const validate = {
    email: (v: string) => emailRegex.test(v) || "Invalid email address.",
    phone: (v: string) => phoneRegex.test(v) || "Phone number must be up to 10 digits only.",
    url: (v: string) => urlRegex.test(v) || "Invalid URL.",
    timezone: (v: string) => moment.tz.zone(v) || "Invalid timezone.",
    subscription: (v: string) => ["Free", "Premium"].includes(v) || "Invalid subscription choice.",
  };

  const handleChange = (key: keyof typeof fields, value: string | number) => {
    if (key in validate) {
      const result = (validate as any)[key](value);
      setFields(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          value,
          error: typeof result === "string" ? result : "",
        }
      }));
    } else {
      // no validation needed
      setFields(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          value,
          error: "",
        }
      }));
    }
  };
  

  const toggleEdit = (key: keyof typeof fields) => {
    if (key === "timezone" || key === "subscription") return;
    setFields(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        editing: !prev[key].editing,
        error: "",
      }
    }));
  };

  const confirmEdit = (key: keyof typeof fields) => {
    if (key === "timezone" || key === "subscription") return;
    const value = fields[key].value;
    const result = validate[key](value as any);
    if (typeof result === "string") {
      setFields(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          error: result
        }
      }));
    } else {
      setFields(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          editing: false,
          error: "",
        }
      }));
    }
  };

  return (
    <Form layout="vertical">
      {Object.entries(fields).map(([key, field]) => (
        <Form.Item label={key.charAt(0).toUpperCase() + key.slice(1)} required key={key}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
            {key === "timezone" ? (
              <Select
                value={field.value}
                style={{ width: "100%" }}
                onChange={(value) => handleChange("timezone", value)}
                options={moment.tz.names().map((tz) => ({
                  value: tz,
                  label: tz,
                }))}
                showSearch
                optionFilterProp="label"
                placeholder="Select Timezone"
                onSelect={() => {
                  document.activeElement instanceof HTMLElement &&
                    document.activeElement.blur();
                }}
              />
            ) : key === "subscription" ? (
              <Radio.Group
                value={field.value}
                onChange={(e) => handleChange("subscription", e.target.value)}
                style={{ width: "100%" }}
                options={[
                  { value: "Free", label: "Free" },
                  { value: "Premium", label: "Premium" },
                ]}
              />
            ) : (
              <Input
                value={field.value}
                disabled={!field.editing}
                status={field.error ? "error" : ""}
                onChange={(e) => handleChange(key as any, e.target.value)}
                onPressEnter={() => confirmEdit(key as any)}
                placeholder={`Enter ${key}`}
                style={
                  !field.editing
                    ? {
                        backgroundColor: "white",
                        color: "#000",
                        cursor: "not-allowed",
                        border: "1px solid #d9d9d9",
                        opacity: 1,
                      }
                    : {}
                }
              />
            )}
            {field.editing && !["timezone", "subscription"].includes(key) ? (
              <Tooltip title="Confirm">
                <Button
                  icon={<CheckOutlined />}
                  onClick={() => confirmEdit(key as any)}
                />
              </Tooltip>
            ) : !["timezone", "subscription"].includes(key) && (
              <Tooltip title="Edit">
                <Button
                  icon={<EditOutlined />}
                  onClick={() => toggleEdit(key as any)}
                  style={{ fontSize: "175%" }}
                />
              </Tooltip>
            )}
          </div>
          {field.error && (
            <Alert
              type="error"
              message={field.error}
              showIcon
              style={{ marginTop: 8 }}
            />
          )}
        </Form.Item>
      ))}
    </Form>
  );
}
