import axios from "../../axios-orders";

export const loadOrders = () => {
  return function (dispatch) {
    // Захиалгыг татаж эхэлснээ мэдэгдэнэ
    // Энийг хүлээж аваад Spinner ажиллаж эхэлнэ
    dispatch(loadOrdersStart());

    axios
      .get("/orders.json")
      .then((repspone) => {
        const loadedOrders = Object.entries(repspone.data).reverse();
        dispatch(loadOrdersSuccess(loadedOrders));
      })
      .catch((err) => loadOrdersError(err));
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDER_START",
  };
};

export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDER_SUCCESS",
    orders: loadedOrders,
  };
};

export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDER_ERROR",
    error,
  };
};

// Захиалгыг хадгалах
export const saveOrder = (newOrder) => {
  return function (dispatch) {
    // Spinner эргэлдүүлж харуулна
    dispatch(saveOrderStart());

    // Firebase realtime cloud -руу хадгална
    axios
      .post("/orders.json", newOrder)
      .then((repspone) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};

export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};

export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error,
  };
};
