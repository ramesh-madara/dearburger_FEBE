const dataCheckoutMethods = [
  {
    name: "takeout",
    fields: [
      {
        type: "input",
        label: "Name",
        name: "name",
        rules: [{ required: true, message: "Please select your Name" }],
        placeholder: "Please select a Name",
        options: [
          { value: "cash", label: "Cash" },
          { value: "visa/master", label: "Visa/Master" },
        ],
      },
      {
        type: "input",
        label: "Phone",
        name: "phone",
        rules: [{ required: true, message: "Please enter your Phone" }],
        placeholder: "Please enter your Phone",
      },
      {
        type: "select",
        label: "Payment Type",
        name: "paymentType",
        rules: [{ required: true, message: "Please select a payment type" }],
        placeholder: "Please select a payment type",
        options: [
          { value: "cash", label: "Cash" },
          { value: "visa/master", label: "Visa/Master" },
        ],
      },
      {
        type: "time",
        label: "Time",
        name: "time",
        rules: [{ required: true, message: "Please select a time" }],
      },
      {
        type: "input",
        label: "Cash",
        name: "cash",
        rules: [{ required: true, message: "Enter the Cash Amount " }],
        placeholder: "Enter the Cash Amount ",
        showif: { triggerValue: "paymentType", value: "cash" },
      },
      {
        type: "input",
        label: "Change",
        name: "change",
        rules: [{ required: true, message: "Enter the Change Amount" }],
        placeholder: "Enter the Change Amount",
        showif: { triggerValue: "paymentType", value: "cash" },
      },
    ],
  },
  {
    name: "dinein",
    fields: [
      {
        type: "input",
        label: "Name",
        name: "name",
        rules: [{ required: true, message: "Please enter your Name" }],
        placeholder: "Please enter your Name",
      },
      {
        type: "input",
        label: "Phone",
        name: "phone",
        rules: [{ required: true, message: "Please enter your Phone" }],
        placeholder: "Please enter your Phone",
      },
      {
        type: "select",
        label: "Payment Type",
        name: "paymentType",
        rules: [{ required: true, message: "Please select a payment type" }],
        placeholder: "Please select a payment type",
        options: [
          { value: "cash", label: "Cash" },
          { value: "visa/master", label: "Visa/Master" },
        ],
      },
      {
        type: "date",
        label: "Date",
        name: "date",
        rules: [{ required: true, message: "Please select a date" }],
      },
      {
        type: "time",
        label: "Time",
        name: "time",
        rules: [{ required: true, message: "Please select a time" }],
      },
    ],
  },
  {
    name: "deliver",
    fields: [
      {
        type: "select",
        label: "Location",
        name: "location",
        rules: [{ required: true, message: "Please select your Location" }],
        placeholder: "Please select a Location",
        options: [
          { value: "location1", label: "Location 1" },
          { value: "location2", label: "Location 2" },
        ],
      },
      {
        type: "input",
        label: "Phone",
        name: "phone",
        rules: [{ required: true, message: "Please enter your Phone" }],
        placeholder: "Please enter your Phone",
      },
      {
        type: "select",
        label: "Payment Type",
        name: "paymentType",
        rules: [{ required: true, message: "Please select a payment type" }],
        placeholder: "Please select a payment type",
        options: [
          { value: "cash", label: "Cash" },
          { value: "visa/master", label: "Visa/Master" },
        ],
      },
      {
        type: "date",
        label: "Date",
        name: "date",
        rules: [{ required: true, message: "Please select a date" }],
      },
      {
        type: "time",
        label: "Time",
        name: "time",
        rules: [{ required: true, message: "Please select a time" }],
      },
    ],
  },
];
export default dataCheckoutMethods;
