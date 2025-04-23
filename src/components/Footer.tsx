import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 3, mt: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Самые высокие здания и сооружения. Гончарук Данил.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;