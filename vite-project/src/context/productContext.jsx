import { createContext, useEffect, useState } from "react";
import api from "../api";

const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState ([]);
    const [selectedCategory, setSelectedCategory] = useState ("all");


    useEffect(() => {
        // istek atilacak url'i belirle
        const url = selectedCategory === "all" ? "/products" : `/products/category/${selectedCategory}`;

       
       // api ye istek at
        api
        .get(url)
        .then((res)  => setProducts(res.data));
    }, [selectedCategory]);

  return (
    <ProductContext.Provider value={{products,setProducts,setSelectedCategory,selectedCategory}}>
        {/* children */}
        {children}
    </ProductContext.Provider>
  );
};

export  {ProductProvider, ProductContext};