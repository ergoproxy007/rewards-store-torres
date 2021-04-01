import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HeaderShop } from 'pages/Landing/components/HeaderShop';
import { MainShop } from 'pages/Landing/components/MainShop';
import { FooterShop } from 'pages/Landing/components/FooterShop';

const LandingContainer = () => {
  return (
    <React.Fragment>

      <CssBaseline />
      
      <HeaderShop />

      <MainShop />

      <FooterShop />

    </React.Fragment>
  );
}

export default LandingContainer;
