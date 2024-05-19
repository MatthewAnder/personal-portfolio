"use client";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Khand-Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('public/fonts/Khand-Bold.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Hind-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('public/fonts/Hind-Regular.ttf') format('truetype');             }
      `}
  />
);

export default Fonts;
