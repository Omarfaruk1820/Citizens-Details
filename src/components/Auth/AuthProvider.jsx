import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const authValue = {
    user,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
