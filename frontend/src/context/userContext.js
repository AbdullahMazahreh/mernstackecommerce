import { createContext, useState } from "react";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userId, setUserId] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <UserContext.Provider
      value={{ userId, setUserId, isSignedIn, setIsSignedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}
