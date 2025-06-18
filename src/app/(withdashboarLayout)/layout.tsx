import Sidebar from "@/components/admin/Sidebar/Sidebar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full md:px-6 px-3  text-[#ffffff]">
          {children}
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
