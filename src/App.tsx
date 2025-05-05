import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './marketmind/Dashboard';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    }}
  >
    <Icon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
    <Typography variant="h5" component="h2" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            MarketMind
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 8 }}
          >
            Global Sales Management with Predictive Analytics
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <FeatureCard
                icon={AnalyticsIcon}
                title="Predictive Analytics"
                description="Reduced manual reporting time by 50% through advanced analytics and automated reporting systems."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureCard
                icon={TrendingUpIcon}
                title="Forecasting Models"
                description="Implemented sophisticated forecasting models to predict product performance and optimize launch strategies."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureCard
                icon={CodeIcon}
                title="Modern Tech Stack"
                description="Built with React.js frontend and Node.js/Express.js backend, featuring TypeScript for type safety."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureCard
                icon={SecurityIcon}
                title="Secure Authentication"
                description="Integrated JWT-based authentication and Bcrypt for enhanced security."
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              Tools & Technologies
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              React.js • Node.js • Express.js • MongoDB • Prisma • TypeScript • JWT • Bcrypt
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
