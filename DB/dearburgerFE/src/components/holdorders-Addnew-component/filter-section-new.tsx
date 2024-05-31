  import React, { useState, useEffect } from "react";
  import '../category -filter-component/filter-section.css';
  import FoodItemNew from "./food-item-new";
  import CategoryList from "../category-list/category";
  import SearchBar from "../search-component/Searchbar";


  
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
  
  interface Category {
    categoryID: string;
    categoryName: string;
    categoryStatus: string;
  }
  
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

  interface FilterProps {
    handleAddOrder:(updatedOrders: Order[])=>void;
  }
  
  
  const FilterSectionNew:  React.FC<FilterProps> = ({handleAddOrder }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [foodItems, setFoodItems] = useState<MenuItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedFoodItem, setSelectedFoodItem] = useState<MenuItem | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false); // Changed initial state to false
    const token = sessionStorage.getItem("token");
    const categoriesUrl = `https://admin.dearburger.link/apidb/categories`;
    const foodItemsUrl = `https://admin.dearburger.link/apidb/menuItemsWithAddons`;
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch(categoriesUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token,
            },
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data: Category[] = await response.json();
          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
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
  
      fetchCategories();
      fetchFoodItems();
    }, [categoriesUrl, foodItemsUrl, token]);
  
    const handleCategoryClick = (categoryID: string) => {
      setSelectedCategory(categoryID);
      setSelectedFoodItem(null);
      setShowAll(false);
    };
  
    const handleShowAllFood = () => {
      setShowAll(true);
      setSelectedCategory("all");
      setSelectedFoodItem(null);
    };
  
    const handleFoodItemSelect = (foodItem: MenuItem) => {
      setSelectedFoodItem(foodItem);
    };
  
    const filteredCategories = categories.filter((category) => {
      const hasAddonItems = foodItems.some(
        (item) => item.categoryID === category.categoryID && item.menuItemType === "addon"
      );
      return !hasAddonItems;
    });
  
    const filteredFoodItems: MenuItem[] = showAll
      ? foodItems.filter((item) => item.menuItemType !== "addon" && item.categoryID !== "4")
      : selectedCategory
      ? foodItems.filter(
          (item) => item.categoryID === selectedCategory && item.menuItemType !== "addon"
        )
      : foodItems.filter((item) => item.menuItemType !== "addon");
  
    return (
      <div className="parent-component">
        <div className="filter-cat">
          <SearchBar
            foodItems={foodItems}
            selectedCategory={selectedCategory}
            onSelectFoodItem={handleFoodItemSelect}
          />
          <CategoryList
            categories={filteredCategories}
            onCategoryClick={handleCategoryClick}
            showAllFood={handleShowAllFood}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="filter-section">
          {selectedFoodItem ? (
            <FoodItemNew
              handleAddOrder={handleAddOrder}
              foodItemID={selectedFoodItem.menuItemID}
              name={selectedFoodItem.menuItemName}
              description={selectedFoodItem.menuItemDescription}
              price={selectedFoodItem.itemPriceID}
              imageSrc="https://i.imgur.com/OpgQRor.png"
              imageAlt={selectedFoodItem.menuItemName}
              key={selectedFoodItem.menuItemID}
              size={["Medium", "Large","Small"]}
              addonID={selectedFoodItem.addons?.map((addon: Addon) => addon.addonID)}
            />
          ) : filteredFoodItems.length > 0 ? (
            filteredFoodItems.map((foodItem) => (
              <FoodItemNew
                handleAddOrder={handleAddOrder}
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
            ))
          ) : (
            <div
              style={{
                color: "black",
                textAlign: "center",
                width: "100%",
                fontSize: "20pt",
                fontFamily: "sans-serif",
              }}
              className="nores"
            >
              No food items available for this category
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default FilterSectionNew;
  
