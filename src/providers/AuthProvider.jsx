import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../configs/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // user registration
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user login by google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user logout
  const logoutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  // observe the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // send user authentication information
  const authInfo = {
    user,
    loader,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
