import React from "react";
import Sidebar from "../../components/sidbar/Sidebar";
import Single from "../../components/single/Single";

export default function SinglePost() {
  return (
    <div className="home grid grid-cols-12 ">
      <div className="col-span-9">
        <Single />
      </div>
      <div className="col-span-3">
        <Sidebar />
      </div>
    </div>
  );
}
