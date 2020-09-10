import React from 'react';
import { Link } from "react-router-dom";

function AppHeader() {
  const logo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.whitehatsec.com%2Fwp-content%2Fthemes%2Fwhitehat%2Fimages%2Fwhs-logo.png&f=1&nofb=1";
  return (
    <div className="bg-gray-200 h-60">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
        <div className="flex items-center flex-shrink-0 text-white mr-6 space-x-3">
          <Link to="/">
            <img className="fill-current h-8 mr-2" src={logo} alt="logo" />
          </Link>
          <span className="text-blue-800 text-xl tracking-tight">React Router Micro Frontend POC</span>
        </div>
        <div className="lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/app1" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-blue-600 mr-4">Sentinel Vision</Link>
            <Link to="/app2" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-blue-600 mr-4">Sentinel Evaluate</Link>
          </div>
          <a 
            href="https://source.localdomain.lan/" 
            className="
              ripple
              inline-block text-sm px-4 py-2 leading-none border shadow rounded text-blue-800 border-blue-800 mt-4 lg:mt-0
              hover:shadow-md hover:bg-gray-100 
            "
          >
              Legacy Sentinel
          </a>
        </div>
      </nav>
    </div>
  );
}

export default AppHeader;
