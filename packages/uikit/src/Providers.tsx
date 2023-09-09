import { Theme, ThemeProvider } from '@emotion/react';
import { MatchBreakpointsProvider } from './contexts/MatchBreakpoints/Provider';

export const UIKitProvider: React.FC<
  React.PropsWithChildren<{ theme: Theme; children: React.ReactNode }>
> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MatchBreakpointsProvider>{children}</MatchBreakpointsProvider>
    </ThemeProvider>
  );
};
