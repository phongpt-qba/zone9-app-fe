import { Box } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Layout;
