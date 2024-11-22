import React from "react";
import axios from "../../axios-orders";

import css from "./style.module.css";
import { Spinner } from "../../components/General/Spinner";
import { Order } from "../../components/Order";

class OrderPage extends React.Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get("/orders.json")
      .then((repspone) => {
        this.setState({ orders: Object.entries(repspone.data).reverse() });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    this.state.orders.map((el) => {
      console.log(el[1].ingredients);
    });
    return (
      <div className={css.OrderHistory}>
        <div className={css.Title}>
          <h2>Захиалгын түүх</h2>
        </div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el) => (
            <Order
              key={el[0]}
              ingredients={el[1].ingredients}
              totalPrice={el[1].totalPrice}
              deliveryCost={el[1].deliveryCost}
              deliveryAddress={el[1].deliveryAddress}
            />
          ))
        )}
      </div>
    );
  }
}

export default OrderPage;
