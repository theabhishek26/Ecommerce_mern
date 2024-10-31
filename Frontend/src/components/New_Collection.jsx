import React,{useState} from "react";
// import LATEST from "../assets/latest";

import Item from "./Item";
import { useEffect } from "react";

const New_Collection = () => {

  const [new_Collection, setNew_Collection] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/newcollection").then((res)=>res.json()).then
    ((data)=>setNew_Collection(data))
  },[])

  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center ">
          Latest Products
          <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent md-16" />
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {new_Collection.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          </div>
        </h3>
      </div>
    </section>
  );
};

export default New_Collection;
