import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import {
  RenderInput,
  // ImageInput,
  renderDropdownList,
  Field,
} from "../../Fields/index";

import "./AddProductModal.scss";
import { SubmitButton } from "../../Fields/index";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../Actions";

Modal.setAppElement("#root");

const AddRetailerModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState({ id: "", name: "All Categories" });
  const [category2, setCategory2] = useState({
    id: "",
    name: "All Categories",
  });
  const [category3, setCategory3] = useState({
    id: "",
    name: "All Categories",
  });
  const [brand, setBrand] = useState({ id: "", name: "All Brands" });
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [upc, setUpc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const categories = useSelector((state: { categories: any }) =>
    Object.values(state.categories)
  );
  const brands = useSelector((state: { brands: any }) =>
    Object.values(state.brands)
  );

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const product = {
      name: name,
      description: description,
      size: size,
      upc: upc,
      // price: price,
      // count: count,
      categories: [
        {
          id: category.id,
          name: category.name,
        },
        category2 && { id: category2.id, name: category2.name },
        category3 && { id: category3.id, name: category3.name },
      ],
      image: [
        {
          large: "Large Image",
          medium: "medium image",
          thumbnail: imageUrl,
        },
      ],
      brand: {
        id: brand.id,
        name: brand.name,
      },
    };
    dispatch(addProduct(product));
  };

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
        Add Product
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="modal_container"
      >
        <ModalHeader title="Add Product" />
        <form className="modal_elements">
          <RenderInput
            type="text"
            name="Name"
            onChange={(name: any) => setName(name.target.value)}
          />
          {/* <RenderInput
            type="text"
            name="price"
            onChange={(price: any) => setPrice(price.target.value)}
          /> */}
          <RenderInput
            type="text"
            name="size"
            onChange={(size: any) => setSize(size.target.value)}
          />
          <RenderInput
            type="text"
            name="upc"
            onChange={(upc: any) => setUpc(upc.target.value)}
          />
          <RenderInput
            type="text"
            name="image"
            onChange={(image: any) => setImageUrl(image.target.value)}
          />
          <RenderInput
            type="text"
            name="description"
            onChange={(description: any) =>
              setDescription(description.target.value)
            }
          />
          <Field
            component={renderDropdownList}
            data={[{ id: "", name: "All Categories" }, ...categories]}
            valueField="id"
            textField="name"
            type="products"
            value={category}
            onChange={(value: any) => {
              setCategory(value);
            }}
          />
          <Field
            component={renderDropdownList}
            data={[{ id: "", name: "All Categories" }, ...categories]}
            valueField="id"
            textField="name"
            type="products"
            value={category2}
            onChange={(value: any) => {
              setCategory2(value);
            }}
          />
          <Field
            component={renderDropdownList}
            data={[{ id: "", name: "All Categories" }, ...categories]}
            valueField="id"
            textField="name"
            type="products"
            value={category3}
            onChange={(value: any) => {
              setCategory3(value);
            }}
          />
          <Field
            component={renderDropdownList}
            data={[{ id: "", name: "All Brands" }, ...brands]}
            valueField="id"
            textField="name"
            type="products"
            value={brand}
            onChange={(value: any) => setBrand(value)}
          />
          <SubmitButton onClick={handleSubmit} />
        </form>
      </Modal>
    </div>
  );
};

export default AddRetailerModal;
