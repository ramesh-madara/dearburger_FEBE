import React from "react";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  initializeCartFromLocalStorage,
} from "../../state/store/store";
import { storeInLocalStorage } from "../../state/store/store";
import { Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { resetExpandedItem } from "../../state/store/store";
import { Button, Flex } from "antd";
import { FoodItemExpandedProps, Addons } from "./food-item-expanded";


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

export const FoodItemExpanded: React.FC<FoodItemExpandedProps> = ({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  foodItemID,
  cartQuantity,
  sizes,
  addonsList,
}) => {
  const [quantity, setQuantity] = useState(cartQuantity || 1);
  const [addonID, setAddons] = useState<Addons[]>([]);
  const [size, setSize] = useState("Medium");
  const addonsArr: Addons[] = [];
  const sizesArr: {}[] = [];
  const [foodItems, setFoodItems] = useState<MenuItem[]>([]);
  const dispatch = useDispatch();

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
});

  const addToCartHandler = () => {
    const sortedAddonIds = [...addonID]
      .sort((a, b) => parseInt(a.value) - parseInt(b.value))
      .map((addon) => addon.value)
      .join("-");
    const cartItemID = foodItemID + "-" + sortedAddonIds + "-" + size;
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
        addonID,
        size,
      })
    );
    storeInLocalStorage();
  };
  const restoreState = () => {
    dispatch(initializeCartFromLocalStorage());
  };
  restoreState();

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    console.log(addonID);
  }

  const handleSizeChange = (value: string) => {
    console.log(`selected ${value}`);
    setSize(value);
  };


  addonsList?.map((addonID) => {
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
  sizes?.map((size) => {
    sizesArr.push({
      value: size,
      label: size,
    });
  });

  const clearExpandedItem = () => {
    dispatch(resetExpandedItem());
  };

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

  const handleSelectOption = (option: any) => {
    const isSelected = addonID.some((addon) => addon.value === option.value);

    if (isSelected) {
      setAddons(addonID.filter((selected) => selected.value !== option.value));
      toggleAddonBtnColor("addon" + option.value, false);
    } else {
      setAddons([...addonID, option]);
      toggleAddonBtnColor("addon" + option.value, true);
    }
  };
  console.log(addonID);
  return (
    <div className="expanded-item-shadow">
      <div className="expaned-item">
        <div className="expaned-item-inner">
          <article className="food-item-expanded-card">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="food-item-expanded-image"
            />
            <h2 className="food-item-expanded-name">{name}</h2>
            <p title={description} className="food-item-expanded-description">
              {description.length > 48
                ? description.slice(0, 10) + "..."
                : description}
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
            <button
              onClick={() => addToCartHandler()}
              className="add-to-cart-button-expanded"
            >
              Add to cart
            </button>
          </article>
          <div className="customization">
            <div className="closeBtn text-secondary">
              <CloseOutlined onClick={() => clearExpandedItem()} />
            </div>
            <div className="">
              <label className="text-secondary" htmlFor="">
                Addons
              </label>

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

              <label className="text-secondary" htmlFor="">
                Type
              </label>
              <Select
                defaultValue="Medium"
                style={{ width: "100%" }}
                onChange={handleSizeChange}
                dropdownStyle={{ zIndex: 1201 }}
                options={sizesArr}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
