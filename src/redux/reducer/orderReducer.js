const initialState = {
  orders: [
    // {
    //   id: "-OCToSlMOytsLKmod9li",
    //   deliveryCost: 3000,
    //   deliveryInfo: {
    //     building: "29-2",
    //     city: "Улаанбаатар",
    //     country: "Монгол",
    //     district: "Баянгол",
    //     khoroo: "26-р хороо",
    //     khoroolol: "",
    //     name: "Tumurkhuyag Enkhnasan",
    //     notes: "",
    //     number: "60",
    //     phoneNumber1: "80903345",
    //     phoneNumber2: "72700800",
    //   },
    //   ingredients: {
    //     bacon: { cost: 1800, count: 1, isDisabled: false },
    //     cheese: { cost: 2000, count: 1, isDisabled: false },
    //     egg: { cost: 1200, count: 1, isDisabled: false },
    //     meat: { cost: 0, count: 0, isDisabled: true },
    //     salad: { cost: 0, count: 0, isDisabled: true },
    //   },
    //   totalPrice: 5000,
    // },
  ],

  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOAD_ORDER_START") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "LOAD_ORDER_SUCCESS") {
    return {
      ...state,
      loading: false,
      orders: action.orders,
    };
  } else if (action.type === "LOAD_ORDER_ERROR") {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
};

export default reducer;
