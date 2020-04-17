import { auth } from "../Firebase/index";
import { LOGIN, AUTH_ERROR } from "./types";

export const startEmailLogin = (email: string, pass: any) => async (dispatch: any) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, pass);

    dispatch({ type: LOGIN, payload: { uid: user?.uid, email: user?.email} });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: { ...error } });
  }
};
