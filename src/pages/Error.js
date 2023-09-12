import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>
          Could not fing this page! <Link to="/">Go to Home page</Link>
        </p>
      </main>
    </>
  );
};

export default ErrorPage;
