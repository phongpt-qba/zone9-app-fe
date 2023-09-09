import localFont from 'next/font/local';

export const helveticaFont = localFont({
  src: [
    { path: '../styles/fonts/helvetica/HelveticaNeue.otf', weight: '400' },
    { path: '../styles/fonts/helvetica/HelveticaNeue-Bold.otf', weight: '700' },
  ],
});

export const refridgeFont = localFont({
  src: [
    {
      path: '../styles/fonts/RefrigeratorDeluxe/refrigeratorDeluxe.otf',
      weight: '400',
    },
    {
      path: '../styles/fonts/RefrigeratorDeluxe/refrigeratorDeluxeBold.otf',
      weight: '700',
    },
  ],
});
