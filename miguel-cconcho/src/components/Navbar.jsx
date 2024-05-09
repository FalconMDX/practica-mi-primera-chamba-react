import React from "react";
import Butonc from "./Butonc";
import Icon from "./Icon";

function Navbar() {
  return (
    <div className="mt-5 px-20">
      <header>
        <nav>
          <ul className="flex justify-center items-center">
            <div className="ml-5 mr-64">
              <Icon type='head' />
            </div>
            <a href="" className="mx-4 hover:text-orange-400">
              <li>Home</li>
            </a>
            <a href="" className="mx-4 hover:text-orange-400">
              <li>Browse</li>
            </a>
            <a href="" className="mx-4 hover:text-orange-400">
              <li>Pricing</li>
            </a>
            <a href="" className="mx-4 hover:text-orange-400">
              <li>Contact</li>
            </a>
            <a href="" className="mx-4 hover:text-orange-400">
              <Butonc type="primary" text="Sigin" />
            </a>
            <a href="" className="mx-4">
              <Butonc type="secondary" text="Login" />
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
