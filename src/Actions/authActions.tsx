import { auth } from "../Firebase/index";
import { LOGIN } from "./types";

export const startEmailLogin = (email: string, pass: any) => async (dispatch: any) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, pass);

    dispatch({ type: LOGIN, payload: { uid: user?.uid, email: user?.email} });
  } catch (error) {
    console.log(error);
  }
};
