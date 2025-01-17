"use client";
import { Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";



export function UserDropDown ({ logoutHandler }) {
  return (
    <Dropdown label="User" dismissOnClick={false}>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item>My orders</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item onClick = {logoutHandler}> Sign out</Dropdown.Item>
    </Dropdown>
  );
}
