import {Link} from "react-router-dom";

const BasketInfo = () => {
  return (
    <div className="text-center fs-4">
        <p>First, add to product to thecart</p>

        <Link className="btn btn-primary" to="/">
        Go to products
        </Link>
    </div>
  )
}

export default BasketInfo;