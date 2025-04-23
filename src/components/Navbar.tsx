import AppBar from '@mui/material/AppBar';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

interface ComponentProps {
  active: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: '8px 12px',
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main,
  },
}));

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        mt: '28px',
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
            Самые высокие здания и сооружения
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant={active === '1' ? 'contained' : 'text'} color="info" size="medium">
              Главная
            </Button>
            <Button variant={active === '2' ? 'contained' : 'text'} color="info" size="medium">
              Список зданий
            </Button>
            <Button variant={active === '3' ? 'contained' : 'text'} color="info" size="medium">
              Контакты
            </Button>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <StyledMenuItem selected={active === '1'}>Главная</StyledMenuItem>
                <StyledMenuItem selected={active === '2'}>Список зданий</StyledMenuItem>
                <StyledMenuItem selected={active === '3'}>Контакты</StyledMenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
