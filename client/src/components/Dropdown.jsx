"use client";
import { Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";

export function UserDropDown({ logoutHandler }) {
  return (
    <Dropdown
    label="User"
    dismissOnClick={false}
  >
      <Dropdown.Item>
        <span style={{ fontWeight: "500", color: "#111827" }}>Profile</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span style={{ fontWeight: "500", color: "#111827" }}>My Orders</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span style={{ fontWeight: "500", color: "#111827" }}>Settings</span>
      </Dropdown.Item>
      <Dropdown.Item onClick={logoutHandler}>
        <span style={{ fontWeight: "500", color: "#ef4444" }}>Sign Out</span>
      </Dropdown.Item>
    </Dropdown>
  );
}
