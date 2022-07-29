import CartItem from "./CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";

type CartProps = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
    }
    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No Items in cart...</p> : null}
            {cartItems.map(el => {
                return <CartItem 
                        key={el.id} 
                        item={el} 
                        addToCart={addToCart} 
                        removeFromCart={removeFromCart}
                    />
            })}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            
        </Wrapper>
    )
}

export default Cart;