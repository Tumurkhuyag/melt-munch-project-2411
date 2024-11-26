import axios from "../../axios-orders";

export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    // Захиалгыг татаж эхэлснээ мэдэгдэнэ
    // Энийг хүлээж аваад Spinner ажиллаж эхэлнэ
    dispatch(loadOrdersStart());

    const token = getState().signupLoginReducer.token;

    axios
      .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((repsponse) => {
        const loadedOrders = Object.entries(repsponse.data).reverse();
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
  return function (dispatch, getState) {
    // Spinner эргэлдүүлж харуулна
    dispatch(saveOrderStart());

    const token = getState().signupLoginReducer.token;

    // Firebase realtime cloud -руу хадгална
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
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
