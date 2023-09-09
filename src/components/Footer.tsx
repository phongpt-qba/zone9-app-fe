import React from 'react';
import { Box, Link } from '@mui/material';

import FooterLogo from './icon/FooterLogo';
import FooterLogoSmall from './icon/FooterLogoSmall';
import Twitter from './icon/Twitter';
import Discord from './icon/Discord';
import Youtube from './icon/Youtube';
import LinkIn from './icon/LinkIn';
import Tele from './icon/Tele';

const Footer = () => {
  return (
    <Box>
      <Box>
        <img src="/img/footer.gif" />
      </Box>
      <Box
        sx={{
          position: 'relative',
          padding: { xs: '20px', md: '50px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 50,
            right: 50,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <img src="/img/Pegi.png" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            display: { xs: 'block', md: 'none' },
          }}
        >
          <img src="/img/PegiSmall.png" />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <FooterLogo />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <FooterLogoSmall />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link
            rel="noopener"
            target="_blank"
            href="https://twitter.com/Z9sOfficial?s=20"
          >
            <Twitter />
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://discord.gg/qF8rD7Ve"
          >
            <Discord />
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.youtube.com/@zone9survivalofficial896"
          >
            <Youtube />
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://t.me/Zone9SurvivalOfficial"
          >
            <Tele />
          </Link>
        </Box>
        <Box
          sx={{
            textAlign: 'Center',
            fontSize: { xs: '10px', sm: '12px', md: '16px' },
          }}
        >
          ZONE NINE SURVIVAL ©. All Rights Reserved. All Trademarks, Copyrights
          And logos Are Property Owned By QBA Studio
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
