import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import PageNav from '../PageNav/PageNav';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const MainLayout = ({children}) => (
  <div>
    <AppBar>
      <Container>
        <Toolbar>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Header />
    <Toolbar />
    <Container>
      <main>
        {children}
      </main>
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
