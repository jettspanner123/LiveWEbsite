import React from "react";
import TopNavbar from "../Components/topnavbar";
import SideNavbar from "../Components/navbar";
import BottomNavbar from "../Components/BottomNavbar";
import LoaderScreen from "../Components/LoaderScreen";
const Index = () => {
  return <div className="bg-[#f1f1f1] overflow-y-hidden">
    <TopNavbar />
    <SideNavbar />
    <BottomNavbar />
    <LoaderScreen />
    <div className="h-full max-w-[1240px] bg-pink-200 m-auto text-center">
      
    </div>
  </div>;
};

export default Index;
