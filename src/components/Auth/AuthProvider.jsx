import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ REGISTER (with name + photo)
  const createUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // ✅ Update Firebase profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL:
          photoURL ||
          `https://ui-avatars.com/api/?name=${name}&background=random`,
      });

      return result;
    } catch (error) {
      console.error("Create User Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGIN
  const userLogin = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ GOOGLE LOGIN
  const signInGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGOUT
  const userLogOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ FORGOT PASSWORD
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Reset Password Error:", error);
      throw error;
    }
  };

  // ✅ AUTH STATE OBSERVER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ CONTEXT VALUE
  const authValue = {
    user,
    loading,
    createUser,
    userLogin,
    userLogOut,
    signInGoogle,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;