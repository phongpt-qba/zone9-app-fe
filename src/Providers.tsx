import type { Store } from '@reduxjs/toolkit';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import breakpoints from '@uikit/theme/breakpoints';
import { configResponsive } from 'ahooks';
import 'dayjs/locale/vi';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { SnackbarProvider } from 'notistack';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { WagmiConfig } from 'wagmi';
import UIKitProvider from './components/Providers/UIKitProvider';
import { wagmiConfig } from './utils/wagmi';

configResponsive(breakpoints);

const Providers: React.FC<
  React.PropsWithChildren<{
    store: Store;
    children: React.ReactNode;
    pageProps: any;
  }>
> = ({ children, pageProps, store }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={wagmiConfig}>
          <Hydrate state={pageProps?.dehydratedState}>
            <NextThemeProvider defaultTheme="dark">
              <UIKitProvider>
                <SnackbarProvider>{children}</SnackbarProvider>
              </UIKitProvider>
            </NextThemeProvider>
          </Hydrate>
        </WagmiConfig>
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
