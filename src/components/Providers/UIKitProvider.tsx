import { UIKitProvider as BaseUIKitProvider, dark, light } from '@uikit';
import 'dayjs/locale/vi';
import { useTheme as useNextTheme, useTheme } from 'next-themes';
import { PropsWithChildren, useEffect } from 'react';

const UIKitProvider: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const { resolvedTheme } = useNextTheme();

  return (
    <BaseUIKitProvider
      theme={resolvedTheme === 'dark' ? dark : light}
      {...props}
    >
      {children}
    </BaseUIKitProvider>
  );
};

export default UIKitProvider;
