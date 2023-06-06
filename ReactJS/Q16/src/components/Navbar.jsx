import React from "react";

const Navbar = ({ showAddTaskModal }) => {
  return (
    <div className="navbar bg-base-300">
      <div className="container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="sdf">
            Task Manger
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
