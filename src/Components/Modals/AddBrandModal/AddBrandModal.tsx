import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import { RenderInput } from "../../Fields/index";

import "./AddBrandModal.scss";
import { SubmitButton } from "../../Fields/index";
import { addBrand } from "../../../Actions";
import { useDispatch } from "react-redux";

Modal.setAppElement("#root");

const AddBrandModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [brandName, setBrandName ] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const brand = {
      categories: [{}],
      products: [{}],
      name: brandName,
    }
    dispatch(addBrand(brand));
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn btn-primary-border">
        Add Brand
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="brand_modal_container"
      >
        <ModalHeader title="Add Brand" />
        <form className="brand_modal_elements">
            <RenderInput type="text" name="Brand Name" onChange={(name: any) => setBrandName(name.target.value)}/>
            <SubmitButton onClick={handleSubmit}/>
        </form>
      </Modal>
    </div>
  );
};

export default AddBrandModal;
