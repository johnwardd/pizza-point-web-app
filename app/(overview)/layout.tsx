import React from "react";
import NavBar from "../ui/(overview)/nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center overflow-y-auto">
      <NavBar />
      <div className="flex w-full items-center p-6 md:w-4/5 md:p-12">
        <div className="w-full rounded-lg bg-white p-6 text-gray-900 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
