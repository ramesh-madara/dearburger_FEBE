import React, { useState, useContext,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Holdpro } from "../hold-orders-component/hold";
import CustomizeModal from "./FoodItemExpanded-new";



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

interface FoodItemProps {
  foodItemID: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  size:string[],
  addonID:string[];
  handleAddOrder:(updatedOrders: Order[])=>void;
}

const FoodItemNew: React.FC<FoodItemProps> = ({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  foodItemID,
  size,
  addonID,
  handleAddOrder,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const orderID = useContext(Holdpro);
  const dispatch = useDispatch();


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




  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToOrder = () => {
    // Construct order item
    const orderItem = {
      cartItemID:"new"+foodItemID+selectedSize+selectedAddons, // Generate a unique cart item ID if needed
      foodItemID,
      name,
      description,
      price: parseFloat(price), // Ensure price is parsed as a number
      imageSrc,
      imageAlt,
      quantity,
      size: selectedSize,
      addonID: selectedAddons,
    };
  
    // Retrieve existing orders from local storage or initialize as an empty array
    const existingOrdersJSON = localStorage.getItem("holdOrders") || "[]";
    const existingOrders = JSON.parse(existingOrdersJSON);
  
    // Find the order corresponding to the provided orderId
    const orderIndex = existingOrders.findIndex((order: { orderID: string; }) => order.orderID === orderID);
  
    // If order doesn't exist, do nothing
    if (orderIndex !== -1) {
      const existingOrderItemIndex = existingOrders[orderIndex].orderitems.findIndex(
        (item: { cartItemID: string; }) => item.cartItemID === "new"+foodItemID+selectedSize+selectedAddons
      );
  
      if (existingOrderItemIndex !== -1) {
        existingOrders[orderIndex].orderitems[existingOrderItemIndex].quantity += quantity;
      } else {
        // Add the new order item to the order's orderitems
        existingOrders[orderIndex].orderitems.push(orderItem);
      }
        // Save the updated orders back to local storage
        localStorage.setItem("holdOrders", JSON.stringify(existingOrders));
        handleAddOrder(existingOrders);
     
    }
  };

  const handleCustomize = () => {
    openModal();
    setSelectedAddons(foodItems.find(item => item.menuItemID === foodItemID)?.addonID || []);
    setSelectedSize(foodItems.find(item => item.menuItemID === foodItemID)?.sizes?.[0] || "Medium");
  };

  return (
    <article className="food-item-card">
      <img src={imageSrc} alt={imageAlt} className="food-item-image" />
      <h2 className="food-item-name">{name}</h2>
      <p title={description} className="food-item-description">
        {description.length > 48 ? description.slice(0, 48) + "..." : description}
      </p>
      <div className="food-item-price">{price}</div>
      <div className="item-quantity-control">
        <button className="customize-button" onClick={handleCustomize}>
          Customize
        </button>
      </div>
      <button onClick={handleAddToOrder} className="item-add-to-cart-button">
        Add to Order
      </button>

      <CustomizeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        foodItem={{foodItemID, name, description, price, imageSrc, imageAlt,size,addonID}} 
        handleAddOrder={handleAddOrder}
      />
    </article>
  );
};

export default FoodItemNew;
