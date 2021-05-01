import LandingContainer from 'pages/Landing/containers/LandingContainer';
import { StoreProvider } from 'context/StoreContext';

export const LandingPage = () => {
    return (
      <StoreProvider>
        <LandingContainer />  
      </StoreProvider>
    );
}
