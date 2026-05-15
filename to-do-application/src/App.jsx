import { useEffect, useState } from "react";
import Input from "./components/Input";
import { List } from "./components/List";
import { createContext } from "react";
export let InputContext = createContext();
import Swal from 'sweetalert2'
function App() {
  if (!localStorage.getItem("list")) {
    localStorage.setItem("list", JSON.stringify([]));
  }

  let lists = JSON.parse(localStorage.getItem("list"));

  let [editid, seteditid] = useState(0);
  let [err, seterr] = useState(true);
  let [input, setinput] = useState("");
  let [data, setdata] = useState(lists);

  
  function adddata(items) {
    if (!(items.trim() == "")) {
      setdata([...data, { items, id: data.length + 1 }]);
      Swal.fire({
  title: "your task added!",
  text: "You clicked the button!",
  icon: "success"
});
      
    }
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify([...data]));
  }, [data]);

  return (
    <>
      <InputContext.Provider
        value={{
          setinput,
          input,
          data,
          setdata,
          err,
          seterr,
          editid,
          seteditid,
        }}
      >
        <section className="md:w-[90vw] w-[90vw] rounded min-w-[317px]  mt-15 mx-auto h-[70vh] md:h-[70vh] bg-gradient-to-t overflow-auto from-blue-950 to-black">
          <div className="bg-black sticky z-30 top-0 ">
            <h1 className="text-center pt-5 uppercase text-3xl font-bold text-white">
              To DO List
            </h1>
            <Input addinput={adddata} input={input} setinput={setinput}></Input>
          </div>
          {
             data.length===0 &&  <h1 className=" block text-center pt-20 text-2xl font-medium text-shadow-amber-50 text-blue-300 text-shadow-xs">No tasks yet ! Start by adding your first task..!</h1>
            
          }
          <List list={data} setlist={setdata}></List>
        </section>
      </InputContext.Provider>
    </>
  );
}

export default App;

