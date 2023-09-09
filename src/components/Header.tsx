import useAuth from '@/hooks/useAuth';
import { useMyriaUserState } from '@/state/user/hooks';
import { Box, Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import LogoHeaderMobile from './icon/LogoHeaderMobile';
import MenuHeaderMobile from './icon/MenuHeaderMobile';
import WalletConnectIcon from './icon/WalletConnectIcon';
import WalletConnectIconSmall from './icon/WalletConnectIconSmall';
import Z9Logo from './icon/Z9Logo';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { address: account } = useAccount();
  const { login, logout } = useAuth();
  const accountEllipsis = account
    ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}`
    : null;
  const myriaUser = useMyriaUserState();

  const handleWalletButtonClicked = () => {
    if (account) {
      logout();
    } else {
      login();
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 10px',
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 10,
        }}
      >
        <Link href="/">
          <Box sx={{ display: 'flex', alignSelf: 'center' }}>
            <LogoHeaderMobile />
          </Box>
        </Link>
        <Box>
          <Button
            id="menu-button-mobile"
            aria-haspopup="true"
            sx={{ minWidth: '0' }}
            onClick={handleOpenMenu}
          >
            <MenuHeaderMobile />
          </Button>
          <Menu
            id="header-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'menu-button-mobile',
            }}
            sx={{
              '&	.MuiMenu-list': { padding: 0 },
              '&	.MuiMenu-list li': { minHeight: 0 },
            }}
          >
            <MenuItem>
              <Button
                id="connect-wallet-button-menu"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '3px 7px',
                  border: '1px solid #F6C660',
                }}
                onClick={handleWalletButtonClicked}
              >
                <WalletConnectIconSmall />
                <Box
                  sx={{ fontSize: { xs: 7, lg: 12, xl: 21 }, color: '#F6C660' }}
                >
                  {accountEllipsis ?? 'Connect Wallet'}
                </Box>
              </Button>
            </MenuItem>
            <MenuItem sx={{ justifyContent: 'center' }}>
              <Box
                sx={{
                  fontSize: { xs: 7, sm: 10, md: 14, lg: 18, xl: 21 },
                  fontWeight: '800',
                }}
              >
                <Tooltip title="coming soon">
                  <p>Earn</p>
                </Tooltip>
              </Box>
            </MenuItem>
            <MenuItem sx={{ justifyContent: 'center' }}>
              <Box
                sx={{
                  fontSize: { xs: 7, sm: 10, md: 14, lg: 18, xl: 21 },
                  fontWeight: '800',
                }}
              >
                <Tooltip title="coming soon">
                  <p>Story</p>
                </Tooltip>
              </Box>
            </MenuItem>
            <MenuItem sx={{ justifyContent: 'center' }}>
              <Box
                sx={{
                  fontSize: { xs: 7, sm: 10, md: 14, lg: 18, xl: 21 },
                  fontWeight: '800',
                }}
              >
                <Tooltip title="coming soon">
                  <p>About Us</p>
                </Tooltip>
              </Box>
            </MenuItem>
            <MenuItem sx={{ justifyContent: 'center' }}>
              <Box
                sx={{
                  fontSize: { xs: 7, sm: 10, md: 14, lg: 18, xl: 21 },
                  fontWeight: '800',
                }}
              >
                <Tooltip title="coming soon">
                  <p>Doc</p>
                </Tooltip>
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'space-between',
          padding: '20px 50px',
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 10,
        }}
      >
        <Z9Logo />
        <Box
          sx={{
            fontSize: { sm: 10, md: 14, lg: 18, xl: 21 },
            fontWeight: '800',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { sm: '20px', md: '50px', lg: '80px' },
          }}
        >
          <Box>
            <Tooltip title="coming soon">
              <p>Earn</p>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="coming soon">
              <p>Story</p>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="coming soon">
              <p>About Us</p>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="coming soon">
              <p>Doc</p>
            </Tooltip>
          </Box>
        </Box>
        <Button
          id="connect-button-desktop"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '11px',
            border: '1px solid #F6C660',
            height: 'fit-content',
            alignSelf: 'center',
          }}
          onClick={handleWalletButtonClicked}
        >
          <WalletConnectIcon />
          <Box sx={{ fontSize: { sm: 7, lg: 12 }, color: '#F6C660' }}>
            {accountEllipsis ?? 'Connect Wallet'}
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
