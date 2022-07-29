import Button from '@material-ui/core/Button';
import { CartItemType } from '../App';
import { CardWrapper } from './CartItem.styles';

type CartItemProps = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}
const CartItem: React.FC<CartItemProps> = ({item, addToCart, removeFromCart}) => {
    const { title, price, amount, id, image } = item;
    return (
        <CardWrapper>
            <div>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="info">
                    <p>Price: ${price}</p>
                    <p>Total: ${(amount * price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button
                        size='small'
                        variant='contained'
                        onClick={() => removeFromCart(id)}
                    >
                        -
                    </Button>
                    <p>{amount}</p>
                    <Button
                        size='small'
                        variant='contained'
                        onClick={() => addToCart(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            
            
        </CardWrapper>
    )
}

export default CartItem;