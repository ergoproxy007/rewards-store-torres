import React from "react";
import StoreProvider from "./context/models/StoreProvider";
import LandingStore from "./pages/Landing/components/LandingStore";

export default function App() {
  return (
    <StoreProvider>
      <div>
        <LandingStore />
      </div>
    </StoreProvider>
  );
}
