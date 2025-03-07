import {useState,useEffect} from "react";
// import POPULAR from "../assets/popular";
import Item from "./Item"

const Popular = () => {


const [popularprod, setPopularprod] = useState([])


const fetchinfo=async()=>{
  await fetch('http://localhost:4000/popularproducts' ).then((res)=>res.json()).then((data)=>
  {setPopularprod(data)})
}
useEffect(()=>{
  fetchinfo()
},[])

  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center ">
          Popular Products
          <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent md-16" />
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularprod.map((item) => (
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

export default Popular;
