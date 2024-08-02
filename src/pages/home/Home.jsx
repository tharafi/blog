import React from "react";
import Sidebar from "../../components/sidbar/Sidebar";
import Posts from "../../components/posts/Posts";
import Header from "../../components/header/Header"
import "./home.css"
const Home = () => {
  return (
    <>
      <Header />
      <div className="home grid grid-cols-12 ">
        <div className="col-span-9">
        <Posts/>
        </div>
        <div className="col-span-3">
        <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
