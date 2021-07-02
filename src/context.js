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
let DB = firebase.firestore();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [db, setDB] = useState(DB);
  const [scores, setScores] = useState({});
  const [allScores, setAllScores] = useState([]);

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

  const firebaseStart = () => {
    const controller = new AbortController();
    // firebase setup
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // var uid = user.uid;
        setUser({
          uid: firebase.auth().currentUser.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        });
        setIsLoggedIn(true);
        db.collection("scores")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              let newScores = doc.data();
              setScores(newScores);
            } else {
              db.collection("scores")
                .doc(user.uid)
                .set({
                  name: user.displayName,
                  uid: user.uid,
                  ttt: 0,
                  rps: 0,
                  snake: 0,
                  two048: 0,
                  cm: 0,
                })
                .then(() => {
                  let newScores = doc.data();
                  setScores(newScores);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    db.collection("scores")
      .get()
      .then((querySnapshot) => {
        const allScores = querySnapshot.docs.map((doc) => doc.data());
        setAllScores(allScores);
      })
      .catch((error) => {
        console.log(error);
      });

    controller.abort();
  };

  useEffect(() => {
    firebaseStart();
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
        db,
        scores,
        setScores,
        allScores,
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
