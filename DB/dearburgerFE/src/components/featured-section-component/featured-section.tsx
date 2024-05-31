import "./featured-section.css";
import React, { useState, useEffect } from "react";
import FoodItem from "../food-item-component/food-item";

interface Addon {
  addonID: string;
  addonName: string;
}

interface MenuItem {
  categoryID: string;
  menuItemID: string;
  menuItemType: string;
  menuItemName: string;
  menuItemDescription: string;
  featured: string;
  itemPriceID: string;
  addons: Addon[];
}



// console.log(featuredFoodItems);
const FeaturedSection = () => {
  
const [foodItems, setFoodItems] = useState<MenuItem[]>([]);


const token = sessionStorage.getItem("token");

const foodItemsUrl = `https://admin.dearburger.link/apidb/menuItemsWithAddons`;

useEffect(() => {

  const fetchFoodItems = async () => {
    try {
      const response = await fetch(foodItemsUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: MenuItem[] = await response.json();
      setFoodItems(data);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  fetchFoodItems();
},[]);



let featuredFoodItems: any = [];
foodItems.map((foodItem: MenuItem) => {
  if (foodItem.featured==="0" && foodItem.menuItemType === "menuItem") {
    featuredFoodItems.push(foodItem);
  }
});


  if (featuredFoodItems.length > 0) {
    return (
      <div className="featured-section">
        {featuredFoodItems.map((foodItem: any) => {
          return (
            <FoodItem
              foodItemID={foodItem.menuItemID}
              name={foodItem.menuItemName}
              description={foodItem.menuItemDescription}
              price={foodItem.itemPriceID}
              imageSrc="https://i.imgur.com/OpgQRor.png"
              imageAlt={foodItem.menuItemName}
              key={foodItem.menuItemID}
              size={["Medium", "Large","Small"]}
              addonID={foodItem.addons?.map((addon: Addon) => addon.addonID)}
            />
          );
        })}
      </div>
    );
  }
};
export default FeaturedSection;
