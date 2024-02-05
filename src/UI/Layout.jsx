import React, { Fragment } from "react";
import { Outlet } from "react-router";
import NavigationBar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <Fragment>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default Layout;
