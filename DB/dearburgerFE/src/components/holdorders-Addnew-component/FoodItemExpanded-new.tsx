import React, { useState,useContext,useEffect } from "react";
import { Button, Flex, Select } from "antd";
import { Holdpro } from "../hold-orders-component/hold";
import './FoodItemExpanded-new.css'


interface OrderItem {
  cartItemID: string;
  foodItemID: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  quantity: number;
  size: string;
  addonID: { value: string; label: string; price: number }[];
}

interface Order {
  orderID: string;
  status: string;
  datetime: Date;
  orderitems: OrderItem[];
}


interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  foodItem: {
    foodItemID:string,
    name: string;
    description: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
   size:string[],
   addonID:string[];
  };

  handleAddOrder:(updatedOrders: Order[])=>void;
}

const CustomizeModal: React.FC<CustomizeModalProps> = ({ isOpen, onClose, foodItem,handleAddOrder}) => {
  if (!isOpen) return null;


;
  const {foodItemID, name, description, price, imageSrc, imageAlt,size,addonID } = foodItem;
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<{ value: string; label: string; price: number }[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const orderID = useContext(Holdpro);
  const addonsArr: any[] = [];
  const sizesArr: {}[] = [];

  const [foodItems, setFoodItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      const token = sessionStorage.getItem("token");

      try {
        const response = await fetch("https://admin.dearburger.link/apidb/menuItemsWithAddons", {
          headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);





  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  const handleSelectOption = (option: any) => {
    const isSelected = selectedAddons.some((addon) => addon.value === option.value);

    if (isSelected) {
      setSelectedAddons(selectedAddons.filter((selected) => selected.value !== option.value));
      toggleAddonBtnColor("addon" + option.value, false);
    } else {
      setSelectedAddons([...selectedAddons, option]);
      toggleAddonBtnColor("addon" + option.value, true);
    }
};
  const currentFoodItem = foodItems.find((item) => item.menuItemID === foodItem.foodItemID);

  // Filter the addon food items based on the addonID of the current food item
  const addonFoodItems = foodItems.filter((item) => currentFoodItem?.addonID?.includes(item.menuItemID));
  
  // Map the filtered addon food items to create addonsArr
  addonID?.map((addonID) => {
    foodItems.map((foodItem) => {
      if (foodItem.menuItemID === addonID) {
        addonsArr.push({
          value: foodItem.menuItemID,
          label: foodItem.menuItemName,
          price: parseFloat(foodItem.itemPriceID),
        });
      }
    });
  });

  size?.map((size) => {
    sizesArr.push({
      value: size,
      label: size,
    });
  });

    function incrementQuantity() {
      setQuantity(quantity + 1);
    }
    function decrementQuantity() {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }

      function toggleAddonBtnColor(buttonID: string, highlight: boolean) {
    const addonBtn = document.getElementById(buttonID);
    if (highlight) {
      if (addonBtn) {
        addonBtn.style.backgroundColor = "green";
        addonBtn.style.color = "white";
      }
    } else {
      if (addonBtn) {
        addonBtn.style.backgroundColor = "white";
        addonBtn.style.color = "black";
      }
    }
  }

  const handleAddToOrder = () => {
    // Construct order item
    const orderItem = {
      cartItemID: "new"+foodItem.foodItemID+selectedSize+selectedAddons, // Generate a unique cart item ID if needed
      foodItemID: foodItem.foodItemID,
      name,
      description,
      price: parseFloat(price), // Ensure price is parsed as a number
      imageSrc,
      imageAlt,
      quantity,
      size: selectedSize,
      addonID: selectedAddons.map((addon) => ({
        value: addon.value,
        label: addon.label,
        price: addon.price,
      })),
    };
  
    // Retrieve existing orders from local storage or initialize as an empty array
    const existingOrdersJSON = localStorage.getItem("holdOrders") || "[]";
    let existingOrders: Order[] = JSON.parse(existingOrdersJSON);
  
    // Find the order corresponding to the provided orderId
    const orderIndex = existingOrders.findIndex((order) => order.orderID === orderID);
  
    if (orderIndex !== -1) {
      // Check if the identical order item already exists in the order
      const existingOrderItemIndex = existingOrders[orderIndex].orderitems.findIndex((item) => 
        item.cartItemID === "new" + foodItem.foodItemID + selectedSize + selectedAddons,
      );
  
      if (existingOrderItemIndex !== -1) {
        // If item exists, update the quantity
        existingOrders[orderIndex].orderitems[existingOrderItemIndex].quantity += quantity;
      } else {
        // Add the order item to the order's orderitems
        existingOrders[orderIndex].orderitems.push(orderItem);
      }
  
      // Save the updated orders back to local storage
      localStorage.setItem("holdOrders", JSON.stringify(existingOrders));
      handleAddOrder(existingOrders);
    }
  };


  return (

    <div className="expanded-item-shadow" >
      
      <div className="expaned-item" >
      <span className="mclose" onClick={onClose}>
          &times;
        </span>
        <div className="expaned-item-inner">
          <article className="food-item-expanded-card">
            <img src={imageSrc} alt={imageAlt} className="food-item-expanded-image" />
            <h2 className="food-item-expanded-name">{name}</h2>
            <p title={description} className="food-item-expanded-description">
              {description.length > 48 ? description.slice(0, 10) + "..." : description}
            </p>
            <div className="food-item-expanded-price">{price}</div>
            <div className="quantity-control-expanded">
            <button
                onClick={() => decrementQuantity()}
                className="decrement-button-expanded"
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                onClick={() => incrementQuantity()}
                className="increment-button-expanded"
              >
                +
              </button>
            </div>
            <button className="add-to-cart-button-expanded" onClick={handleAddToOrder}>Add to Order</button>
          </article>
          <div className="customization" style={{ backgroundColor: "white" }}>
            {addonsArr.length > 0 && (
              <div>
                <label className="text-secondary">Addons</label>
                <Flex gap="small" wrap="wrap">
                  {addonsArr.map((addon) => {
                    return (
                      <Button
                        id={"addon" + addon.value}
                        onClick={() => handleSelectOption(addon)}
                        key={addon.value}
                        style={{ width: "auto" }}
                        className="addon-button"
                      >
                        {addon.label}
                      </Button>
                    );
                  })}
                </Flex>
              </div>
            )}
            {sizesArr.length > 0 && (
              <div>
                <label className="text-secondary">Size</label>
                <Select
                  defaultValue="Medium"
                  style={{ width: "100%" }}
                  onChange={handleSizeChange}
                  options={sizesArr}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomizeModal;
