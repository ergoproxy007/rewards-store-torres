import LandingContainer from 'pages/Landing/containers/LandingContainer';
import { StoreProvider } from "./context/StoreContext";

export default function App() {
  return (
    <StoreProvider>
      <LandingContainer />  
    </StoreProvider>
  );
}
