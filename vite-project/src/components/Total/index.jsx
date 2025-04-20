import { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import { toast } from "react-toastify";


const Total = () => {
    const {basket} = useContext(BasketContext);
    // dizideki toplam amount miktarini hesapla 
    const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);

    // total price miktarinin hesaplama
    const totalPrice = basket.reduce((acc, item) => acc + item.price * item.amount,0);

    console.log(totalAmount);
  return (
    <div className="rounded my-5 shadow border p-4 d-flex  flex-column justify-content-between">
        <div className="fs-5">
        <p><span className="text-warning fw-bold">{totalAmount}</span> item available in the basket</p>
        <p>Total Price: <span>{totalPrice.toFixed(2)}</span>zl</p>
        </div>
        <button onClick={() => toast.success("Payment completed !")}
        className="btn btn-success py-2 px-3">Go to payment</button>
    </div>
  )
}

export default Total;