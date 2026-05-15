import React, { useContext, useEffect } from "react";
import { InputContext } from "../App";
import { FaEdit } from "react-icons/fa";
const Edit = ({ id }) => {
  let { data, setinput, setdata, seterr, input, seteditid, editid } =
    useContext(InputContext);

  let handleedit = (id) => {
    let value = data.find((items) => {
      return items.id === id;
    });

    setinput(value.items);
  };

  return (
    <div>
      <p
        className="cursor-pointer active:scale-105 text-2xlxl"
        onClick={() => {
          handleedit(id);
          seterr(false);
          seteditid(id);
        }}
      >
        <FaEdit />
      </p>
    </div>
  );
};

export default Edit;
