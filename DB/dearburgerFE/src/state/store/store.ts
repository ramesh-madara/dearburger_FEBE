/*
 * Configures Redux store with cart slice reducer and middleware.
 * Exports store, cart actions, and cart selector.
 * Handles initializing cart state from local storage.
 * Saves cart state to local storage on changes.
 */
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Addons {
  value: string;
  label: string;
  price: Number;
}
interface ExpandedItem {
  foodItemID: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  quantity: Number;
  addonID?: string[];
  size?: string[];
}
interface ExpandedItemState {
  expandedItem: ExpandedItem | null;
}

interface CartItem {
  cartItemID: string;
  foodItemID: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  quantity: Number;
  addonID?: Addons[];
  size?: string;
}
interface displayType {
  isMobile: boolean;
}
interface cartToggleMobile {
  showCartMobile: boolean;
}

interface CartState {
  cartItems: CartItem[];
  cartMobile: cartToggleMobile;
  displayType: displayType;
}

const initialState: CartState = {
  cartItems: [],
  cartMobile: { showCartMobile: false },
  displayType: { isMobile: false },
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.cartItemID === action.payload.cartItemID
      );
      if (existingItem) {
        existingItem.quantity =
          Number(existingItem.quantity) + Number(action.payload.quantity);
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeCartItems: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems"); // Remove from local storage
    },

    removeEachCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        item => item.cartItemID !== action.payload
      );
      const updatedCartItems = state.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    },
    /**
     * Initializes the cart state from local storage.
     * If cart is empty, sets state to previously saved cart items.
     */
    initializeCartFromLocalStorage: (state) => {
      if (state.cartItems.length === 0) {
        const previousState = setPreviousCartState();
        state.cartItems = [...previousState];
      }
    },


    setDisplayType: (state, action: PayloadAction<displayType>) => {
      state.displayType = action.payload;
      // console.log(state.displayType);
    },
    toggleCartMobile: (state, action: PayloadAction<cartToggleMobile>) => {
      state.cartMobile = action.payload;
      if (state.displayType.isMobile) {
        // console.log("mobile");
      } else {
        // console.log("desktop");
      }

      return;
    },
  },
});
const expandedItemSlice = createSlice({
  name: "expandedItem",
  initialState: {
    expandedItem: null,
  } as ExpandedItemState,
  reducers: {
    setExpandedItem: (state, action: PayloadAction<ExpandedItem>) => {
      state.expandedItem = action.payload;
      console.log(action.payload);
    },
    resetExpandedItem: (state) => {
      state.expandedItem = null;
      console.log(888);
    },
  },
});
export const {
  addToCart,
  removeCartItems,
  removeEachCart,
  initializeCartFromLocalStorage,
  toggleCartMobile,
  setDisplayType,
} = cartSlice.actions;
export const { setExpandedItem, resetExpandedItem } = expandedItemSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    expandedItem: expandedItemSlice.reducer,
   
  },
});


/**
 * Retrieves the previous cart state from localStorage.
 * If cart is empty, returns any previously saved cart items.
 * Otherwise, returns empty array.
 */
function setPreviousCartState() {
  const prevstoredItems = localStorage.getItem("cartItems");

  if (prevstoredItems) {
    const storedItems = JSON.parse(prevstoredItems);
    return storedItems;
  }

  return [];
}

export const storeInLocalStorage = () => {
  const itemsToBeSored = JSON.stringify(store.getState().cart.cartItems);
  localStorage.setItem("cartItems", itemsToBeSored);
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
