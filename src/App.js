import React from "react";
import StoreProvider from "./context/StoreProvider";
import LandingShop from "./pages/Landing/components/LandingShop";

export default function App() {
  return (
    <StoreProvider>
      <div>
        <LandingShop />
      </div>
    </StoreProvider>
  );
}
