import { createContext,useEffect,useState } from "react";
// import all_products from "../assets/all_products"
import Item from "../components/Item";

export const ShopContext=createContext(null);
 

const getDafaultCart=()=>{
    let cart={};
    for (let index = 0; index < 300 +   1; index++) {
        cart[index]=0;
        
    }
    return cart;
}


const ShopContextProvider=(props)=>{

    
    const [cartItems, setCartItems] = useState(getDafaultCart());

    const [all_products, setAll_Products] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>
        {setAll_Products(data)});
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept: 'application/formData',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:"",
            })
                
            .then((res)=>res.json()).then((data)=>setCartItems(data));
        }
    },[])

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch("http://localhost:4000/addtocart",{
                method: 'POST',
                headers:{
                    Accept: 'application/formData',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId})
            }).then((res)=>res.json()).then((data)=>console.log(data));
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch("http://localhost:4000/removefromcart",{
                method: 'POST',
                headers:{
                    Accept: 'application/formData',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId})
            }).then((res)=>res.json()).then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_products.find((product)=>product.id==Number(item));
                totalAmount+=itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue={all_products,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;