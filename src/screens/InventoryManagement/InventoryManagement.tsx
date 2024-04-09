import React, { useEffect, useState } from "react";

// deps
import { useDispatch } from "react-redux";

// styles
import "./InventoryManagement.css";

// components
import { Modal, Table, Tiles } from "../../components";

// slice
import { setItems } from "../../store/itemsSlice";

function InventoryManagement() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    category: "",
    value: "",
    quantity: 0,
    price: "",
  });

  const getData = async () => {
    fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setItems(data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p className="inv-stats-title">Inventory stats</p>

      <div>
        <Tiles />
      </div>

      <div className="inv-tables-container">
        <Table
          setShowModal={setShowModal}
          setSelectedProduct={setSelectedProduct}
        />
      </div>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}

export default InventoryManagement;
