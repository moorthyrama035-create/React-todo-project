import React, { createContext, useContext, useState } from "react";
import Edit from "./Edit";
import { InputContext } from "../App";

const Input = ({ addinput, input, setinput }) => {
  let { err, seterr, data, setdata, editid } = useContext(InputContext);

  function handleeditdata(para) {
    let newarr = data.map((items) => {
      return items.id === para ? { ...items, items: input } : items;
    });
    setdata(newarr);
    localStorage.setItem("list", JSON.stringify([...newarr]));
  }
  function inputhandle(e) {
    setinput(e.target.value);
  }
  return (
    <div className="flex p-1 md:p-4 gap-1  justify-center pt-5 md:gap-2 text-white">
      <span>
        <input
          value={input}
          className="rounded  focus:outline-2 focus:outline-blue-100 outline-2 p-2 outline-purple-500"
          onChange={inputhandle}
          type="text"
        />
      </span>

      <button
        className="bg-purple-500  px-3 text-[12px] md:p-2 rounded hover:cursor-pointer active:scale-95"
        onClick={() => {
          if (err) {
            addinput(input);
            setinput("");
          } else {
            handleeditdata(editid);
            setinput("");
          }
          seterr(true);
        }}
      >
        {err ? "Add task" : "Save task"}
      </button>
    </div>
  );
};

export default Input;
