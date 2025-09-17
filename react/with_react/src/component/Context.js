import { createContext } from "react";

// 1. Create the context
export const TestContext = createContext();

// 2. Create the provider component
export function TestProvider({ children }) {
  let name = "habibi love";

  return (
    <TestContext.Provider value={name}>
      {children}
    </TestContext.Provider>
  );
}
