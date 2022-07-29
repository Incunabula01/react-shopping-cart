import { useState } from "react";
import { useQuery } from '@tanstack/react-query';

// Ui Componenents
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Item from "./Components/Item";
import Cart from './Components/Cart';

// Styles
import { Wrapper, DrawerButton } from "./App.styles";
import { click } from "@testing-library/user-event/dist/click";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    ['products'],
    getProducts 
    );
  
    const getTotalItems = (items: CartItemType[]) => {
      return items.reduce((acc: number, item ) => acc + item.amount, 0);
    };
    const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(prev => {
        const findItem = prev.find(item => item.id === clickedItem.id);

        if(findItem){
          return prev.map(item => {
            if(item.id === clickedItem.id){
              return {...item, amount: item.amount + 1};
            }
            return item;
          });
        }
        return [...prev, { ...clickedItem, amount: 1}];
      });
    };

  const handleRemoveFromCart = (id: number) => {
      setCartItems(prev => (
        prev.reduce((acc, item) => {
          if(item.id === id){
            if(item.amount === 1) {
              return acc;
            }
            return [...acc, {...item, amount: item.amount - 1}];
          }
          return [...acc, item];
        }, [] as CartItemType[])
      ));
    };
    

    if(isLoading){
      return <LinearProgress/>
    }

    if(error){
      return <div><h1>Something Went Wrong!</h1></div>
    }
    
    
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}
          />
      </Drawer>
      <DrawerButton onClick={() => setCartOpen(!cartOpen)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart/>
        </Badge>
      </DrawerButton>
      <Grid container spacing={6}>
        {data?.map((el, i) => {
          return (
            <Grid item key={i} xs={12} sm={4}>
              <Item item={el} handleAddToCart={handleAddToCart} />
            </Grid>
          )
        })}
       
      </Grid>
    </Wrapper>
  );
}

export default App;
