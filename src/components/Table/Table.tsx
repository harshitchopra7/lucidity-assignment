import React from "react";

// deps
import { useDispatch, useSelector } from "react-redux";

// styles
import "./Table.css";

// types
import { Item } from "../../types/types";

// store
import { RootState } from "../../store/store";

// slice
import { deleteItem, toggleItem } from "../../store/itemsSlice";

interface IProps {
  setShowModal: (showModal: boolean) => void;
  setSelectedProduct: (selectedProduct: Item) => void;
}

function Table({ setShowModal, setSelectedProduct }: IProps) {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.items.items);
  const isAdmin = useSelector((state: RootState) => state.isAdmin.isAdmin);

  const handleEditClick = (productDetails: Item) => {
    if (!isAdmin) return;
    setShowModal(true);
    setSelectedProduct(productDetails);
  };

  const handleDeleteClick = (productDetails: Item) => {
    if (!isAdmin) return;
    dispatch(deleteItem(productDetails.name));
  };

  const handleToggle = (productDetails: Item) => {
    if (!isAdmin) return;
    dispatch(toggleItem(productDetails.name));
  };

  const isRowDisabled = (productDetails: Item) => {
    return productDetails.isDisabled || false;
  };

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((val, key) => (
            <tr
              key={key}
              className={isRowDisabled(val) ? "table-row-disabled" : ""}
            >
              <td>{val.name}</td>
              <td>{val.category}</td>
              <td>{val.price}</td>
              <td>{val.quantity}</td>
              <td>{val.value}</td>
              <td className="table-data-actions">
                <img
                  onClick={() => handleEditClick(val)}
                  width="24"
                  height="24"
                  src={
                    isAdmin
                      ? "https://img.icons8.com/ios/50/556B2F/edit--v1.png"
                      : "https://img.icons8.com/ios/50/000000/edit--v1.png"
                  }
                  alt="edit--v1"
                />
                <img
                  onClick={() => handleToggle(val)}
                  width="24"
                  height="24"
                  src={
                    isRowDisabled(val) || !isAdmin
                      ? "https://img.icons8.com/material-outlined/24/invisible.png"
                      : "https://img.icons8.com/ios-glyphs/30/800080/visible--v1.png"
                  }
                  alt={isRowDisabled(val) ? "invisible" : "edit--v1"}
                />
                <img
                  onClick={() => handleDeleteClick(val)}
                  width="24"
                  height="24"
                  src={
                    isAdmin
                      ? "https://img.icons8.com/material-rounded/24/ff0000/filled-trash.png"
                      : "https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
                  }
                  alt="filled-trash"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
