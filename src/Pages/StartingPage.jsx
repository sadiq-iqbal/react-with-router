import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function StartingPage() {
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      <div className="welcome flex justify-center flex-col items-center pl-20  p-10 pr-20 rounded-3xl">
        <p className="text-4xl">Welcome To Our Webiste</p>
        <Link to="/home">
          <button className="mt-10  text-4xl border-2 rounded-full hover:bg-white border-white p-6 hover:text-black transition-all ">
            <FaHome className=""></FaHome>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StartingPage;
