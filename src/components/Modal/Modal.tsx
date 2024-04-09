import React, { useState } from "react";

// styles
import "./Modal.css";

// types
import { Item } from "../../types/types";

// deps
import { useDispatch } from "react-redux";

// slice
import { updateItem } from "../../store/itemsSlice";

interface IProps {
  setShowModal: (value: boolean) => void;
  selectedProduct: Item;
  setSelectedProduct: (selectedProduct: Item) => void;
}

function Modal({ setShowModal, selectedProduct, setSelectedProduct }: IProps) {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");

  const renderField = (
    title: string,
    placeholder: string,
    type: string,
    value: string,
    setValue: any
  ) => {
    return (
      <div className="modal-fields">
        <p>{title}</p>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };

  const isSaveButtonDisabled = () => {
    return price === "" || quantity === "" || value === "";
  };

  const setAllFieldsAsEmpty = () => {
    setCategory("");
    setPrice("");
    setQuantity("");
    setValue("");
  };

  const closeModal = () => {
    setShowModal(false);
    setAllFieldsAsEmpty();
    setSelectedProduct({
      name: "",
      category: "",
      value: "",
      quantity: 0,
      price: "",
    });
  };

  const onCancel = () => {
    closeModal();
  };

  const onSave = () => {
    if (isSaveButtonDisabled()) return;

    const value = Number(price) * Number(quantity);

    dispatch(
      updateItem({
        name: selectedProduct.name,
        category: category || selectedProduct.category,
        price: `$${price}`,
        quantity: Number(quantity),
        value: `$${value}`,
      })
    );

    closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <p className="modal-header-title">Edit Product</p>
        <p className="modal-header-cross" onClick={closeModal}>
          X
        </p>
      </div>

      <p>{selectedProduct.name}</p>

      <div className="modal-fields-container">
        {renderField(
          "Category",
          selectedProduct.category,
          "string",
          category,
          setCategory
        )}
        {renderField(
          "Price *",
          selectedProduct.price,
          "number",
          price,
          setPrice
        )}
      </div>

      <div className="modal-fields-container">
        {renderField(
          "Quantity *",
          String(selectedProduct.quantity),
          "number",
          quantity,
          setQuantity
        )}
        {renderField(
          "Value *",
          selectedProduct.value,
          "number",
          value,
          setValue
        )}
      </div>

      <div className="modal-fields-button-container">
        <button className="modal-fields-cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className={
            isSaveButtonDisabled()
              ? "modal-fields-save-button-disabled"
              : "modal-fields-save-button"
          }
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Modal;
