"use client";

import { Dropdown } from "flowbite-react";

export function UserDropDown ({ logoutHandler }) {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item>My orders</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item onClick = {logoutHandler}> Sign out</Dropdown.Item>
    </Dropdown>
  );
}
