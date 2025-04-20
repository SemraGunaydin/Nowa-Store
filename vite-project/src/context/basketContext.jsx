import { createContext, useState } from "react";
import {toast} from "react-toastify";

const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  console.log(basket);

  // sepete urun ekleme / miktar artirma icin fonksiyon
  const addToBasket = (product) => {
    // sepette urun var mi kontrol et
    const found = basket.find((i) => i.id === product.id);


    if (!found) {
      // sepettte urun yoksa
      setBasket(basket.concat({ ...product, amount: 1 }));
      toast.success("item added to basket");

    } else {
      // sepette urun mevcutsa miktari 1 arttir
      const updated = { ...found, amount: found.amount + 1 };

      // sepetteki urunlein icerisinde guncel degeri ekle
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));

      //sepetti guncelle
      setBasket(newBasket);
      toast.info(`item updated: ${updated.amount}`);
    }
  };


  // 
  // sepettten urun kaldirmak icin fonksiyon
  const removeFromBasket = (delete_id) => {

    // Id' si bilinen urunu sepetten kaldir
    const filtred = basket.filter((i) => i.id !== delete_id);

    // Sepeti guncelle
    setBasket(filtred);

    toast.error("item removed");


  };

  // urun miktarini azalt
  const decreaseAmount = (delete_id) => {
    // Miktari azaltacak urunu sepette bul
    const found = basket.find((i) => i.id === delete_id);

    // Eger urunun mijktari birden fazlaysa
if(found.amount>1){
    // miktari guncelle
    const updated = {...found, amount: found.amount -1};

    // guncel degeri diziye aktar
    const newBasket = basket.map((i) => (i.id === updated.id ? updated :i ));

    // sepeti guncelle 
    setBasket(newBasket);

}else {
  // urun miktari 1'e esitse bunu direkt sil
  removeFromBasket(delete_id);

}};


  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}>
      {/*  */}
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
