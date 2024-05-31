import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  initializeCartFromLocalStorage,
  setExpandedItem,
} from "../../state/store/store";
import "./food-item.css";
import { storeInLocalStorage } from "../../state/store/store";
export interface Addons {
  value: string;
  label: string;
  price: Number;
}

interface FoodItemProps {
  foodItemID: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  key: string;
  cartQuantity?: number;
  cart?: boolean;
  size?: string[];
  addonID?: string[];
}






const FoodItem: React.FC<FoodItemProps> = ({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  foodItemID,
  cartQuantity,
  size,
  addonID,
}) => {
  const [quantity, setQuantity] = useState(cartQuantity || 1);
  const dispatch = useDispatch();

  useEffect(() => {
    // Restore cart items from local storage when the component mounts
    dispatch(initializeCartFromLocalStorage());
  }, [dispatch]);

  const addToCartHandler = () => {
    const selectedSize = "Medium"; // Example: you might want to get the selected size from a dropdown
    const selectedAddonID: Addons[] = []; // Example: you might want to get selected addons from checkboxes
    const cartItemID = foodItemID + "-" + selectedAddonID + "-" + selectedSize;

    dispatch(
      addToCart({
        cartItemID,
        foodItemID,
        name,
        description,
        price,
        imageSrc,
        imageAlt,
        quantity,
        size: selectedSize,
        addonID: selectedAddonID,
      })
    );
    storeInLocalStorage(); // Consider storing the entire cart in local storage instead of just the current item
  };

  const setExpandItemToState = () => {
    dispatch(
      setExpandedItem({
        foodItemID,
        name,
        description,
        price,
        imageSrc,
        imageAlt,
        quantity,
        size,
        addonID,
      })
    );
  };

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <article className="food-item-card">
      <img src={imageSrc} alt={imageAlt} className="food-item-image" />
      <h2 className="food-item-name">{name}</h2>
      <p title={description} className="food-item-description">
        {description.length > 48
          ? description.slice(0, 48) + "..."
          : description}
      </p>
      <div className="food-item-price">{price}</div>
      <div className="item-quantity-control">
        <button onClick={setExpandItemToState} className="customize-button">
          Customize
        </button>
      </div>
      <button onClick={addToCartHandler} className="item-add-to-cart-button">
        Add to cart
      </button>
    </article>
  );
};

export default FoodItem;
