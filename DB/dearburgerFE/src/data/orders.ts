interface HoldOrders {
  orderID: string;
  status: string;
  datetime: Date; // Assuming datetime is a Date object
  orderitems: any[];
}
const holdOrders: HoldOrders[] = [
  {
    orderID: "1",
    status: "hold",
    datetime: new Date("2024-04-29T08:30:00"),
    orderitems: [
      {
        cartItemID: "1--Medium",
        foodItemID: "1",
        name: "Spicy Chicken Burger",
        description: "A delicious chicken burger with a spicy kick.",
        price: 5.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Spicy Chicken Burger",
        quantity: 1,
        size: "Medium",
        addonID: [],
      },
      {
        cartItemID: "1-10-11-Large",
        foodItemID: "1",
        name: "Spicy Chicken Burger",
        description: "A delicious chicken burger with a spicy kick.",
        price: 5.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Spicy Chicken Burger",
        quantity: 3,
        addonID: [
          {
            value: "10",
            label: "Extra Cheese",
            price: 1.99,
          },
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
        ],
        size: "Large",
      },
      {
        cartItemID: "9-10-11-Small",
        foodItemID: "9",
        name: "Beef Tacos",
        description:
          "Tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
        price: 7.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Beef Tacos",
        quantity: 1,
        addonID: [
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
          {
            value: "10",
            label: "Extra Cheese",
            price: 1.99,
          },
        ],
        size: "Small",
      },
      {
        cartItemID: "9-11-Small",
        foodItemID: "9",
        name: "Beef Tacos",
        description:
          "Tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
        price: 7.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Beef Tacos",
        quantity: 1,
        addonID: [
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
        ],
        size: "Small",
      },
      {
        cartItemID: "5--Medium",
        foodItemID: "5",
        name: "Margherita Pizza",
        description:
          "Traditional Italian pizza with fresh tomatoes, basil, and mozzarella.",
        price: 10.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Margherita Pizza",
        quantity: 3,
        size: "Medium",
        addonID: [],
      },
    ],
  },
  {
    orderID: "2",
    status: "hold",
    datetime: new Date("2024-04-29T08:30:00"),
    orderitems: [
      {
        cartItemID: "1--Medium",
        foodItemID: "1",
        name: "Spicy Chicken Burger",
        description: "A delicious chicken burger with a spicy kick.",
        price: 5.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Spicy Chicken Burger",
        quantity: 1,
        size: "Medium",
        addonID: [],
      },
      {
        cartItemID: "1-10-11-Large",
        foodItemID: "1",
        name: "Spicy Chicken Burger",
        description: "A delicious chicken burger with a spicy kick.",
        price: 5.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Spicy Chicken Burger",
        quantity: 3,
        addonID: [
          {
            value: "10",
            label: "Extra Cheese",
            price: 1.99,
          },
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
        ],
        size: "Large",
      },
      {
        cartItemID: "9-10-11-Small",
        foodItemID: "9",
        name: "Beef Tacos",
        description:
          "Tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
        price: 7.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Beef Tacos",
        quantity: 1,
        addonID: [
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
          {
            value: "10",
            label: "Extra Cheese",
            price: 1.99,
          },
        ],
        size: "Small",
      },
      {
        cartItemID: "9-11-Small",
        foodItemID: "9",
        name: "Beef Tacos",
        description:
          "Tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
        price: 7.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Beef Tacos",
        quantity: 1,
        addonID: [
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
        ],
        size: "Small",
      },
      {
        cartItemID: "5--Medium",
        foodItemID: "5",
        name: "Margherita Pizza",
        description:
          "Traditional Italian pizza with fresh tomatoes, basil, and mozzarella.",
        price: 10.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Margherita Pizza",
        quantity: 3,
        size: "Medium",
        addonID: [],
      },
    ],
  },
  {
  orderID: "3",
    status: "hold",
    datetime: new Date("2024-04-29T08:30:00"),
    orderitems: [
      {
        cartItemID: "1--Medium",
        foodItemID: "1",
        name: "Spicy Chicken Burger",
        description: "A delicious chicken burger with a spicy kick.",
        price: 5.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Spicy Chicken Burger",
        quantity: 1,
        size: "Medium",
        addonID: [],
      },
      {
        cartItemID: "1-10-11-Large",
        foodItemID: "1",
        name: "Spicy Chicken Burger",
        description: "A delicious chicken burger with a spicy kick.",
        price: 5.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Spicy Chicken Burger",
        quantity: 3,
        addonID: [
          {
            value: "10",
            label: "Extra Cheese",
            price: 1.99,
          },
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
        ],
        size: "Large",
      },
      {
        cartItemID: "9-10-11-Small",
        foodItemID: "9",
        name: "Beef Tacos",
        description:
          "Tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
        price: 7.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Beef Tacos",
        quantity: 1,
        addonID: [
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
          {
            value: "10",
            label: "Extra Cheese",
            price: 1.99,
          },
        ],
        size: "Small",
      },
      {
        cartItemID: "9-11-Small",
        foodItemID: "9",
        name: "Beef Tacos",
        description:
          "Tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
        price: 7.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Beef Tacos",
        quantity: 1,
        addonID: [
          {
            value: "11",
            label: "Double Chicken",
            price: 1.99,
          },
        ],
        size: "Small",
      },
      {
        cartItemID: "5--Medium",
        foodItemID: "5",
        name: "Margherita Pizza",
        description:
          "Traditional Italian pizza with fresh tomatoes, basil, and mozzarella.",
        price: 10.99,
        imageSrc: "https://i.imgur.com/OpgQRor.png",
        imageAlt: "Margherita Pizza",
        quantity: 3,
        size: "Medium",
        addonID: [],
      },
    ],
  }
];
export default holdOrders;
