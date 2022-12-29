import "../styles/globals.css";

import React, { FC } from "react";

import { AppProps } from "next/app";

const GithubUserViewer: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default GithubUserViewer;
