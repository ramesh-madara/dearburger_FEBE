import React from "react";
import "./category.css";
import { Button } from "antd";

interface Category {
  categoryID: string;
  categoryName: string;
  categoryStatus: string;
}

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryClick: (categoryID: string) => void;
  showAllFood: () => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategoryClick,
  showAllFood,
}) => {
  return (
    <div className="category-list">
      <div
        className={`clist ${selectedCategory === "all" ? "selected" : ""}`}
        onClick={showAllFood}
      >
        <Button className="cat_select">All</Button>
      </div>
      {categories.map((category) => (
        <div
          key={category.categoryID}
          className={`clist ${selectedCategory === category.categoryID ? "selected" : ""}`}
          onClick={() => onCategoryClick(category.categoryID)}
        >
          <Button className="cat_select">{category.categoryName}</Button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
