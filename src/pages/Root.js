import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './Roots.module.css';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
