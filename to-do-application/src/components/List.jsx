import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

export const List = ({ list, setlist }) => {
  let colors = ["bg-orange-400", "bg-amber-800", "bg-green-900", "bg-pink-500"];

  return (
    <section className="pt-4 px-8 relative z-10 md:text-2xl xl:text-4xl  text-white">
      <ul
        className="grid gap-y-3"
        style={{ listStyle: "none", textDecorationLine: "none" }}
      >
        {list.map((lists, index) => {
          return (
            <li
              className={`${colors[index % colors.length]}  flex justify-between items-center  p-3 font-serif rounded`}
              key={lists.id}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <p>{lists.items}</p>
              <div className="flex gap-x-4 items-center">
                <Edit id={lists.id} data={list}></Edit>
                <Delete id={lists.id} data={list} updatelist={setlist}></Delete>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
