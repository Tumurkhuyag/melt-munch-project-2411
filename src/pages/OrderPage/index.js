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
    console.log(this.props);
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

export default OrderPage;
