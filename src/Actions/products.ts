import _ from "lodash";
import { FETCH_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from "./types";
import { productsCollection } from "../firebase/collections";

export const fetchProducts = () => async (dispatch: any) => {
  try {
    const productsSnapshot = await productsCollection.get();
    const products: any = [];
    productsSnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    dispatch({
      type: FETCH_PRODUCTS,
      payload: _.uniqBy(products, "upc"),
    });
  } catch (error) {
    throw error;
  }
};

export const addProduct = (product: any) => async (
  dispatch: any
) => {
  const docRef = await productsCollection.add({...product});
  dispatch({
    type: ADD_PRODUCT,
    payload: { id: docRef.id, ...product },
  });
};

export const deleteProduct = (uid: string) => async (dispatch: any) => {

  try {
    await productsCollection.doc(uid).delete();
    dispatch({
      type: DELETE_PRODUCT,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};
