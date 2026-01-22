import React from "react";
import Navbar from "../component/Navbar";

const MainLayout = ({ children, setPage }) => {
  return (
    <>
      <Navbar setPage={setPage} />
      {children}
    </>
  );
};

export default MainLayout;
