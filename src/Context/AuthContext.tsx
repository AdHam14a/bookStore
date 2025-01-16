import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";


interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image?: string; 
}

interface AuthContextType {
    userData: User | null;
    saveUserData: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps{
    children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [userData, setUserData] = useState<User | null>(null);


  const saveUserData = () => {
    const encoded = localStorage.getItem("userToken");
    if (encoded) {
      try {
        const decoded = jwtDecode<User>(encoded);
        setUserData(decoded);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData,saveUserData }} >
      {children}
    </AuthContext.Provider>
  );
}
