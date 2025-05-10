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
import {Link, useLocation} from 'react-router-dom';

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

  const location = useLocation();

  const getIsActive = (path: string) => location.pathname === path;

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
            Результаты экзаменов студентов
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to='/'>
            <Button variant={getIsActive('/') ? 'contained' : 'text'} color="info">
              Главная
            </Button>
          </Link>

          <Link to='/list'>
            <Button variant={getIsActive('/list') ? 'contained' : 'text'} color="info">
              Табличная табличка
            </Button>
          </Link>

          <Link to='/chart'>
            <Button variant={getIsActive('/chart') ? 'contained' : 'text'} color="info">
              Диаграммы
            </Button>
          </Link>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Link to="/" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <StyledMenuItem selected={active === '1'}>Главная</StyledMenuItem>
                </Link>

                <Link to="/list" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <StyledMenuItem selected={active === '2'}>Список зданий</StyledMenuItem>
                </Link>

                <Link to="/chart" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <StyledMenuItem selected={active === '3'}>Диаграммы</StyledMenuItem>
                </Link>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
