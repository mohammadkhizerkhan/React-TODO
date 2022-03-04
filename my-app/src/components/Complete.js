import React, { useEffect } from "react";
import { IoReload } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


function Complete() {

  return (
    <div className="todoLists">
      <div className="todo-container">
        <button className="btn completed">
          <IoReload />
        </button>
        <p className="todo-msg">meeting at 9am</p>
        <button className="btn delete">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default Complete;
// IoReload
