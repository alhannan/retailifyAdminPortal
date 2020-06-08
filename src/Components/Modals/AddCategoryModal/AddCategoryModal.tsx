import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import { RenderInput } from "../../Fields/index";

import "./AddCategoryModal.scss";
import { SubmitButton } from "../../Fields/index";
import { addCategory } from "../../../Actions";
import { useDispatch } from "react-redux";

Modal.setAppElement("#root");

const AddCategoryModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName ] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addCategory({name: categoryName}))
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
        Add Category
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="category_modal_container"
      >
        <ModalHeader title="Add Category" />
        <form className="category_modal_elements" onSubmit={handleSubmit}>
            <RenderInput type="text" name="Category" onChange={(name: any) => setCategoryName(name.target.value)} />
            <SubmitButton />
        </form>
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
