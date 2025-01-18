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
    interface CartContextType {
        id:number
    }
    export const CartContext = createContext<CartContextType | null>(null);

    interface CartContextProviderProps{
        children: ReactNode;
    }
  
    export default function AuthContextProvider({ children }: CartContextProviderProps) {
      const [basket, setBasket] = useState<User | null>(null);
    
    
      const saveCartData = () => {
        const encoded = localStorage.getItem("userCart");
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
        <CartContext.Provider value={{ userData,saveUserData }} >
          {children}
        </CartContext.Provider>
      );
    }

