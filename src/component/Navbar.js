import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ marginBottom: 30 }}>
      <NavLink
        exact
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/"
        style={{ margin: 20 }}
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/detail"
        style={{ margin: 20 }}
      >
        Detail
      </NavLink>

      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/feed"
        style={{ margin: 20 }}
      >
        Feed
      </NavLink>
    </div>
  );
}
