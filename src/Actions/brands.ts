import { FETCH_BRANDS, DELETE_BRAND, ADD_BRAND } from "./types";
import { brandsCollection } from "../firebase/collections";

export const fetchBrands = () => async (dispatch: any) => {
  try {

    const brandsSnapshot = await brandsCollection.get();
    const brands: any = [];
    brandsSnapshot.forEach(doc => {
      brands.push({ id: doc.id, ...doc.data()})
    })
    dispatch({
      type: FETCH_BRANDS,
      payload: brands
    })

  } catch (error) {
    throw error;
  }
};

export const addBrand = (brand: any) => async (
  dispatch: any
) => {
  const docRef = await brandsCollection.add({...brand});
  dispatch({
    type: ADD_BRAND,
    payload: { id: docRef.id, ...brand },
  });
};

export const deleteBrand = (uid: string) => async (dispatch: any) => {
  try {
    await brandsCollection.doc(uid).delete();
    dispatch({
      type: DELETE_BRAND,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};
