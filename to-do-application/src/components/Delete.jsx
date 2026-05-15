import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'
const Delete = ({ id, data, updatelist }) => {
  function handledelte(ids) {
    let newarr = data.filter((items) => {
      return items.id !== ids;
    }).map((item,index)=>{
          return {...item,id:index+1}
    })

    updatelist(newarr);

    localStorage.setItem("list", JSON.stringify([...newarr]));
    Swal.fire({
  title: "Your task deleted!",
  text: "You clicked the button!",
  icon: "Deleted"
});
  }

  return (
    <div>
      <p
        className="cursor-pointer active:scale-110 "
        onClick={() => {
          handledelte(id);
        }}
      >
        <MdDeleteForever className="text-2xl xl:text-4xl" />
      </p>
    </div>
  );
};

export default Delete;
