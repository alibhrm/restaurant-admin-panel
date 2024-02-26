import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Search from "@/components/Search/Search";

const mainLayout = () => {
  return (
    <div className="flex h-full w-full relative z-20">
      <Navbar />
      <div className="grow">
        <div className="h-screen w-full flex flex-col overflow-y-auto bg-stone-200">
          <Search />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default mainLayout;
