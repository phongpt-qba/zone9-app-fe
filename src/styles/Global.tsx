import { css, Global } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;

          img {
            height: auto;
            width: 100%;
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
