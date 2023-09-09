import Providers from '@/Providers';
import Layout from '@/components/Layout';
import { PageMeta } from '@/components/Layout/Page';
import useEagerConnect from '@/hooks/useEagerConnect';
import { SEO } from '@/next-seo.config';
import { persistor, wrapper } from '@/state';
import GlobalStyle from '@/styles/Global';
import { helveticaFont, refridgeFont } from '@/styles/fonts';
import CssBaseline from '@mui/material/CssBaseline';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  /** render component without all layouts */
  pure?: true;
  /** is mini program */
  mp?: boolean;
  /**
   * allow chain per page, empty array bypass chain block modal
   * @default [ChainId.BSC]
   * */
  chains?: number[];
  isShowScrollToTopButton?: true;
  /**
   * Meta component for page, hacky solution for static build page to avoid `PersistGate` which blocks the page from rendering
   */
  Meta?: React.FC<React.PropsWithChildren<unknown>>;
};

function GlobalHooks() {
  useEagerConnect();

  return null;
}

function App({ Component, ...rest }: AppProps): ReactNode {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#1FC7D4" />
        {(Component as NextPageWithLayout).mp && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            src="https://public.bnbstatic.com/static/js/mp-webview-sdk/webview-v1.0.0.min.js"
            id="mp-webview"
          />
        )}
      </Head>
      <DefaultSeo {...SEO} />
      <Providers store={store} pageProps={props.pageProps}>
        <PageMeta />
        {(Component as NextPageWithLayout).Meta && (
          // @ts-ignore
          <Component.Meta {...pageProps} />
        )}
        <GlobalHooks />
        <CssBaseline />
        <GlobalStyle />
        <style jsx global>{`
          div {
            font-family: ${helveticaFont.style.fontFamily};
          }
          p {
            font-family: ${refridgeFont.style.fontFamily};
            margin: 0;
          }
        `}</style>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        </PersistGate>
      </Providers>
    </>
  );
}

export default App;
