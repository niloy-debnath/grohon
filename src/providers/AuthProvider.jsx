import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

const AuthProvider = ({ children }) => {
  const registerUser = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    registerUser,
    loginUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
