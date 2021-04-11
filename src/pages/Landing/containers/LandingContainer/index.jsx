import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HeaderShop } from 'pages/Landing/components/HeaderShop';
import { MainShop } from 'pages/Landing/components/MainShop';
import { FooterShop } from 'pages/Landing/components/FooterShop';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledContainer = withStyles((props) => {
  return ({
      root: {
          paddingRight: "80px",
          paddingLeft: "80px",
          backgroundColor: "#F4F4F4",
          [props.breakpoints.only('xs')]: {
              paddingRight: "0",
              paddingLeft: "0",
          },
      },
  })
})(Container);

const LandingContainer = () => {
  return (
    <StyledContainer maxWidth="xl" xs={12}>

      <CssBaseline />
      
      <HeaderShop />

      <MainShop />

      <FooterShop />

    </StyledContainer>
  );
}

export default LandingContainer;
