import { auth } from "../../firebase";
import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, SetUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initalzeUser);
    return unsubscribe;
  }, []);

  async function initalzeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      SetUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      SetUserLoggedIn(false);
    }
    setLoading(false);
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
