import React from 'react';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not fing this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
