import "./food-item-expanded-styles.css";
import { FoodItemExpanded } from "./FoodItemExpanded";

export interface FoodItemExpandedProps {
  foodItemID: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  key?: Number;
  cartQuantity?: number;
  cart?: boolean;
  sizes?: string[];
  addonsList?: string[];
}
export interface Addons {
  value: string;
  label: string;
  price: Number;
}

export default FoodItemExpanded;
