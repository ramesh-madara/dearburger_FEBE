import React from "react";
import { useState } from "react";
import "./cart-food-item.css";
import { addToCart, storeInLocalStorage,removeEachCart } from "../../state/store/store";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

interface FoodItemProps {
  cartItemID: string;
  foodItemID: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  key?: Number;
  cartQuantity?: number;
  cart?: boolean;
  addonID: Addons[];
  size?: string;
}
interface Addons {
  value: string;
  label: string;
}

const CartFoodItem: React.FC<FoodItemProps> = ({
  cartItemID,
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  foodItemID,
  cartQuantity,
  addonID,
  size,
}) => {
  const [quantityDisplay, setQuantityDisplay] = useState(cartQuantity || 1);
  const [priceDisplay, setpriceDisplay] = useState(cartQuantity ? cartQuantity* parseFloat(price) : parseFloat(price) );

  const dispatch = useDispatch();
  const addToCartHandler = (quantity: number) => {
    dispatch(
      addToCart({
        cartItemID,
        name,
        description,
        price,
        imageSrc,
        imageAlt,
        foodItemID,
        quantity,
      })
    );
    storeInLocalStorage();
  };

  const handleRemoveFromCart = () => {
    dispatch(removeEachCart(cartItemID)); // dispatch action to remove item from cart
    // Optionally, you can also update localStorage here if needed
  };

  function incrementQuantity() {
    setQuantityDisplay(quantityDisplay + 1);
    setpriceDisplay(priceDisplay+parseFloat(price));
    addToCartHandler(1);
  }
  function decrementQuantity() {
    if (quantityDisplay > 1) {
      setQuantityDisplay(quantityDisplay - 1);
      setpriceDisplay(priceDisplay-parseFloat(price));
      addToCartHandler(-1);
    }
  }
  return (
    <div title={description} className="cart-food-item-card">
      <img src={imageSrc} alt={imageAlt} className="cart-food-item-image" />
      <div>
        <h2 className="cart-food-item-name">{name}</h2>
        <div className="features">
          <div className="sizefeature feature text-secondary">{size}</div>

          {addonID?.length > 0 ? (
            addonID.map((item) => (
              <div
                key={item.value}
                className="addonfeature feature text-secondary"
              >
                {item.label}
              </div>
            ))
          ) : (
            <></>
          )}

          
        </div>

        <div className="cart-food-item-price">{priceDisplay.toFixed(2)}

        <div className="quantity-control">
          <button
            onClick={() => decrementQuantity()}
            className="decrement-button"
          >
            -
          </button>
          <span className="quantity">{quantityDisplay}</span>
          <button
            onClick={() => incrementQuantity()}
            className="increment-button"
          >
            +
          </button>
      
        </div>
        
        </div>
     
      </div>
      <Button icon={<DeleteOutlined/>} onClick={handleRemoveFromCart} className="cartclose" />
    </div>
  );
};

export default CartFoodItem;
