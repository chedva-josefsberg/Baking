import { Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import './Footer.css';
import { flex } from '@mui/system/flexbox';

const Footer = () => {
  return (
    <Container className='main-footer' maxWidth="xl" component="footer" sx={{ mt: 8, py: 4, borderTop: 1, borderColor: 'divider', overflowX: 'hidden' }}>
      <Grid container spacing={4} justifyContent="space-between" sx={{ overflowX: 'hidden' }}>
        <Grid item xs={12} sm={6} md={2} sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem' }}>
            Tel Aviv
          </Typography>
          <Typography sx={{ fontSize: '1rem' }}>Carlibach St 10, Tel Aviv, Israel</Typography>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            CONTACT US
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={2} sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem' }}>
            London
          </Typography>
          <Typography sx={{ fontSize: '1rem' }}>125 Kingsway, London WC2B 6NH, United Kingdom</Typography>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            CONTACT US
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={2} sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem' }}>
            New York
          </Typography>
          <Typography sx={{ fontSize: '1rem' }}>500 7th Ave, New York, NY 10018, United States</Typography>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            CONTACT US
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={2} sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            About Us
          </Link>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            Works
          </Link>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            UX UI
          </Link>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            Contact Us
          </Link>
          <Link href="#" underline="none" sx={{ mt: 1, display: 'block', color: '#d75a4a' }}>
            Newsletter
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={2} sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <Grid container   display={flex} flexDirection={'column'} s> 
            <Grid item>
              <Link href="#" color="inherit">
                <Facebook sx={{ fontSize: '2rem' }} />
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit">
                <Instagram sx={{ fontSize: '2rem' }} />
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit">
                <LinkedIn sx={{ fontSize: '2rem' }} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
