import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import { Modal } from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import { useNavigate } from "react-router-dom";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const navigate = useNavigate();

  const continueOrder = () => {
    navigate({ pathname: "/ship" });
  };

  const showConfirmModal = () => setConfirmOrder(true); //state merge
  const closeConfirmModal = () => setConfirmOrder(false);

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        <OrderSummary
          closeConfirmModal={closeConfirmModal}
          onConfirm={continueOrder}
        />
      </Modal>

      <Burger />
      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;
