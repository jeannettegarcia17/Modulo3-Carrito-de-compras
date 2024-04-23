import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useCart} from '../hooks/useCart.jsx';

function CartItem ( {thumbnail, title, price, quantity, addToCart} ){
    return (
     <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - ${price}
        </div>

       <footer>
        <small>Qty: {quantity} </small>
        <button onClick={addToCart}>+</button>
         </footer>
     </li>
    )
}

export function Cart (){

    const cartCheckboxId = useId();

    const { cart, clearCart, addToCart } = useCart();

    const cantProductos = cart.reduce((total, product) => total + product.quantity, 0);

    const totalPagar = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return(
        <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>

        <input id={cartCheckboxId} type="checkbox" hidden />

        <aside className="cart">
            <ul>
                
                {
                    cart.map ( product => (
                        <CartItem
                        key={product.id}
                        addToCart={ () => addToCart(product)}
                        {...product}
                        />
                    ) )
                }
            </ul>
            <p>Productos: {cantProductos}</p>
            <p>Total a pagar: ${totalPagar}</p>

            <button style={{ backgroundColor: "#D6589F"}} onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
        </>
    )
}

