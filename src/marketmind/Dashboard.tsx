import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from '@mui/material';
import {
  TrendingUp,
  Analytics,
  Security,
  Code,
  MoreVert,
} from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', p: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white', mb: 4 }}>
          MarketMind Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Sales Overview Card */}
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Sales Overview
              </Typography>
              {/* Add your sales chart component here */}
            </Paper>
          </Grid>

          {/* Quick Stats */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    Total Sales
                  </Typography>
                  <Typography variant="h4" sx={{ color: 'white', mt: 1 }}>
                    $24,000
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    +15% from last month
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    Active Products
                  </Typography>
                  <Typography variant="h4" sx={{ color: 'white', mt: 1 }}>
                    156
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    +5 new this week
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Feature Cards */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <CardHeader
                avatar={<Analytics sx={{ color: 'white' }} />}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert sx={{ color: 'white' }} />
                  </IconButton>
                }
                title="Predictive Analytics"
                titleTypographyProps={{ color: 'white' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Advanced analytics and automated reporting systems reducing manual work by 50%.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <CardHeader
                avatar={<TrendingUp sx={{ color: 'white' }} />}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert sx={{ color: 'white' }} />
                  </IconButton>
                }
                title="Forecasting Models"
                titleTypographyProps={{ color: 'white' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Sophisticated forecasting models to predict product performance and optimize launch strategies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <CardHeader
                avatar={<Code sx={{ color: 'white' }} />}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert sx={{ color: 'white' }} />
                  </IconButton>
                }
                title="Modern Tech Stack"
                titleTypographyProps={{ color: 'white' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Built with React.js frontend and Node.js/Express.js backend, featuring TypeScript for type safety.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <CardHeader
                avatar={<Security sx={{ color: 'white' }} />}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert sx={{ color: 'white' }} />
                  </IconButton>
                }
                title="Secure Authentication"
                titleTypographyProps={{ color: 'white' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Integrated JWT-based authentication and Bcrypt for enhanced security.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard; 