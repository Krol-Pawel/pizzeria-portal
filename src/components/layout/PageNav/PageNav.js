import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './PageNav';

const PageNav = () => {
  
    return (
      <nav className={styles.component}>
        <Button variant="contained" size="large" color='primary' component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
        <Button variant="contained" size="large" color='primary' component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
        <Button variant="contained" size="large" color='primary' component={NavLink} to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>OrderWaiter</Button>
        <Button variant="contained" size="large" color='primary' component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
        <Button variant="contained" size="large" color='primary' component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
      </nav>
    );
  
}

export default PageNav;
