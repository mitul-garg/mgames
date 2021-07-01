import React, { useContext, useState, useEffect } from "react";

// firebase imports
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const AppContext = React.createContext();

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDYQkJG7hvlcMsiszLLQb8yVp5VnRh9k0Q",
  authDomain: "mgames-95701.firebaseapp.com",
  projectId: "mgames-95701",
  storageBucket: "mgames-95701.appspot.com",
  messagingSenderId: "67698365240",
  appId: "1:67698365240:web:f8ec6650b6718507ffe7cd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const signOut = () => {
    setLoading(true);
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setIsLoggedIn(false);
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    setLoading(false);
  };
  const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  useEffect(() => {
    // firebase setup
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // var uid = user.uid;
        setUser({
          name: user.displayName,
          email: user.email,
        });
        setIsLoggedIn(true);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        setIsLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        isLoggedIn,
        setIsLoggedIn,
        signOut,
        signIn,
        loading,
        setLoading,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook for using context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
