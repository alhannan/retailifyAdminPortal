import axios from 'axios';
import { FETCH_RETAILERS, DELETE_RETAILER } from './types';
import { retailersCollection } from '../firebase/collections';

export const fetchRetailers = () => async (dispatch: any) => {
  try {

    const retailersSnapshot = await retailersCollection.get();
    const retailers: any = [];
    retailersSnapshot.forEach((doc: any) => {
      retailers.push({ id: doc.id, ...doc.data()})
    })
    dispatch({
      type: FETCH_RETAILERS,
      payload: retailers
    })

  } catch (error) {
    throw error;
  }
};

export const deleteRetailer = (uid: string) => async (dispatch: any) => {
  try {
    await axios.delete(`http://localhost:3001/retailers/${uid}`);
    dispatch({
      type: DELETE_RETAILER,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};
