import { FETCH_CATEGORIES, DELETE_CATEGORY, ADD_CATEGORY } from './types';
import { categoriesCollection } from '../firebase/collections';

export const fetchCategories = () => async (dispatch: any) => {
  try {

    const categoriesSnapshot = await categoriesCollection.get();
    const categories: any = [];
    categoriesSnapshot.forEach(doc => {
      categories.push({ id: doc.id, ...doc.data()})
    })
    dispatch({
      type: FETCH_CATEGORIES,
      payload: categories
    })

  } catch (error) {
    throw error;
  }
};

export const addCategory = (categories: any) => async (
  dispatch: any
) => {
  const docRef = await categoriesCollection.add({...categories});
  dispatch({
    type: ADD_CATEGORY,
    payload: { id: docRef.id, ...categories },
  });
};

export const deleteCategory = (uid: string) => async (dispatch: any) => {
  try {
    await categoriesCollection.doc(uid).delete();
    dispatch({
      type: DELETE_CATEGORY,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};