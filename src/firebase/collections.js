import { firestore } from ".index";

export const retailersCollection = firestore.collection("retailers");
export const usersCollection = firestore.collection("users");
export const walletCollection = firestore.collection("wallets");
export const brandsCollection = firestore.collection('brands');
export const categoriesCollection = firestore.collection('categories')
export const productsCollection = firestore.collection('products')