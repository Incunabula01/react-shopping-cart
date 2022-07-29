 import {Button} from '@material-ui/core';
import { CartItemType } from "../App";
import { Wrapper } from "./Item.styles";

type ItemProps = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => {
    const { image, description, price, title } = item;
    return (
        <Wrapper>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </Wrapper>
    )
}

export default Item;