import React, { useContext } from 'react';
import { StoreProvider } from "./context/StoreContext";
import { LandingShop } from "./pages/Landing/components/LandingShop";

export default function App() {
  return (
    <StoreProvider>
      <div>
        <LandingShop />
      </div>
    </StoreProvider>
  );
}
