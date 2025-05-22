import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const userContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const provider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateUserProfile = (upDateInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, upDateInfo);
  };
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // togole theme in my project

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  
  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  // React.useEffect(() => {
  //   document.querySelector("html").setAttribute("data-theme", theme);
  // }, [theme]);

  const data = {
    signUp,
    signIn,
    loading,
    signInWithGoogle,
    user,
    setLoading,
    setUser,
    userSignOut,
    updateUserProfile,
    handleToggle,
    theme,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUser(user);
    });
    return () => unSubscribe();
  }, []);

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export default AuthProvider;
