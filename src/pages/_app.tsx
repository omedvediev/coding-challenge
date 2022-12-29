import '../../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import React, { FC } from 'react';

import { AppContextProvider } from '../context';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

const GithubUserViewer: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AppContextProvider>
  );
};

export default GithubUserViewer;
