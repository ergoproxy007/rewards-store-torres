import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StoreContext } from 'context/StoreContext';
import { HeaderShop } from 'pages/Landing/components/HeaderShop';
import { MainShop } from 'pages/Landing/components/MainShop';
import { FooterShop } from 'pages/Landing/components/FooterShop';

export const LandingContainer = () => {
  const {
    data: { user },
  } = useContext(StoreContext);
  return (
    <React.Fragment>

      <CssBaseline />
      
      <HeaderShop user={user} />

      <MainShop />

      <FooterShop />

    </React.Fragment>
  );
}
