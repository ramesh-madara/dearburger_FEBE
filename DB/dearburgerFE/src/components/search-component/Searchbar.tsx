// SearchBar.tsx
import React, { useState } from "react";
import { Input, List,Button } from "antd";
import "./search-bar.css";

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


interface SearchBarProps {
  foodItems: MenuItem[]; // Array of food items to search from
  selectedCategory: string | null; // Currently selected category
  onSelectFoodItem: (foodItem: any) => void; // Callback function when a food item is selected
}

const SearchBar: React.FC<SearchBarProps> = ({
  foodItems,
  selectedCategory,
  onSelectFoodItem,
}) => {
  const [searchValue, setSearchValue] = useState<string>(""); // Initialize search value to empty string
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Function to handle search input change
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    // Filter food items based on search value and selected category
    const filteredResults = foodItems.filter(
      (item) =>
        item.menuItemName.toLowerCase().includes(value.toLowerCase()) &&
        (((selectedCategory === null && item.categoryID !=="5" )|| (selectedCategory === "all" && item.categoryID !=="4" && item.categoryID !=="5")) || item.categoryID === selectedCategory)
    );
    setSearchResults(filteredResults);
  };

  // Function to handle food item selection
  const handleFoodItemSelect = (item: any) => {
    setSearchValue("");
    onSelectFoodItem(item);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  const customEmptyMessage = <span className="empty">No Food Items Found!</span>;
  return (
    <div className="search-container">
      <Input
        placeholder="Search food items"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="search-input"
      />


        <Button
       
          className="clear-button"
          onClick={handleClearSearch}
        >
          Clear
        </Button>





      {searchValue !== "" && ( // Render search results only if search value is not empty
        <List 
          dataSource={searchResults}
          renderItem={(item) => (
            <List.Item
              onClick={() => handleFoodItemSelect(item)}
              className="result-item"
            >
              {item.menuItemName}
            </List.Item>
          )}
          locale={{ emptyText: customEmptyMessage }}
          className="search-results"
        />
      )}
    </div>
  );
};

export default SearchBar;
