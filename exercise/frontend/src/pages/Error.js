import React from 'react';
import PageContent from '../components/pageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.data) {
    if (error.status === 200) {
      message = JSON.parse(error.data).message;
    }

    if (error.status === 500) {
      message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
      title = 'Not found!';
      message = 'Could not find ressource or page.';
    }
  }

  return (
    <>
    <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
