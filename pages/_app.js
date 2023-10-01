import React from 'react';
import Image from 'next/image';
import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import bgimg from '../public/homebg.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import "../public/css/style.css"

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;