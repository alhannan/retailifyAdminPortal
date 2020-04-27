import { auth, functions } from "../firebase";
import { LOGIN, AUTH_ERROR, LOGOUT } from "./types";

export const startEmailLogin = (email: string, pass: any) => async (
  dispatch: any
) => {
  try {
    const adminLogin = functions.httpsCallable("adminLogin");

    const { data } = await adminLogin({ email });

    if (data) {
      const { user } = await auth.signInWithEmailAndPassword(email, pass);
      dispatch({
        type: LOGIN,
        payload: { uid: user?.uid, email: user?.email },
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: "Not an Admin Account",
      });
    }
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid Email or Password" });
  }
};

export const adminDetail = (user: any) => async (dispatch: any) => {
  const { uid, email } = user;
  dispatch({
    type: LOGIN,
    payload: { uid, email },
  });
};

export const logout = () => async (dispatch: any) => {
  await auth.signOut();
  dispatch({ type: LOGOUT });
};