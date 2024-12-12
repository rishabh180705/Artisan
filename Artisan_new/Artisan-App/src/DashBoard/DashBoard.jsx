import React, { useState } from "react";
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  Box,
  Grid,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import * as XLSX from 'xlsx';


import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { 
  Analytics as AnalyticsIcon,
  TrendingUp as TrendingUpIcon,
  ShoppingBag as ShoppingBagIcon,
  Public as PublicIcon
} from "@mui/icons-material";

// Custom Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }
      }
    }
  }
});

const Dashboard = () => {
    const exportToExcel = () => {
    const exportData = countryData.map(country => ({
        Country: country.country,
        'Imports from India': country.indiaImports,
        'Total Shipments': country.shipments,
        'Average Rating': country.avgRating,
        ...Object.fromEntries(
          Object.entries(productSalesData).map(([product, sales]) => [
            `${product} Sales`, 
            sales[months.length - 1] // Last month's sales
          ])
        )
      }));
    
      // Create worksheet
      const worksheet = XLSX.utils.json_to_sheet(exportData);
    
      // Create workbook and add the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Artisthan Dashboard");
    
      // Generate Excel file
      XLSX.writeFile(workbook, `Artisthan_Dashboard_Export_${new Date().toISOString().split('T')[0]}.xlsx`);
    };
  const countryData = [
    {
      country: "USA",
      indiaImports: 5000,
      shipments: 200,
      avgRating: 4.5,
      icon: <PublicIcon color="primary" />
    },
    {
      country: "UK",
      indiaImports: 4000,
      shipments: 150,
      avgRating: 4.2,
      icon: <PublicIcon color="primary" />
    },
    {
      country: "Canada",
      indiaImports: 3000,
      shipments: 120,
      avgRating: 4.0,
      icon: <PublicIcon color="primary" />
    },
    {
      country: "Germany",
      indiaImports: 2000,
      shipments: 100,
      avgRating: 3.8,
      icon: <PublicIcon color="primary" />
    },
    {
      country: "Australia",
      indiaImports: 1000,
      shipments: 80,
      avgRating: 3.5,
      icon: <PublicIcon color="primary" />
    },
  ];

  const productSalesData = {
    Handicrafts: [100, 200, 150, 250, 300, 200],
    Textile: [80, 170, 140, 220, 270, 180],
    Jewelry: [50, 100, 80, 150, 120, 200],
    Pottery: [100, 20, 45, 23, 50, 89],
  };

  const months = ["January", "February", "March", "April", "May", "June"];

  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [selectedProduct, setSelectedProduct] = useState("Handicrafts");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const selectedCountryData = countryData.find(
    (data) => data.country === selectedCountry
  );

  const splineOptions = {
    chart: {
      type: "spline",
      backgroundColor: 'transparent'
    },
    title: {
      text: `Monthly Sales for ${selectedProduct}`,
      style: {
        color: '#ffffff',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: months,
      labels: {
        style: {
          color: '#ffffff'
        }
      }
    },
    yAxis: {
      title: {
        text: "Sales",
        style: {
          color: '#ffffff'
        }
      },
      labels: {
        style: {
          color: '#ffffff'
        }
      }
    },
    series: [
      {
        name: selectedProduct,
        data: productSalesData[selectedProduct],
        color: '#1976d2'
      }
    ],
    legend: {
      itemStyle: {
        color: '#ffffff'
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        flexGrow: 1, 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default
      }}>
        {/* App Bar */}
        <AppBar position="static" sx={{ 
          backgroundColor: theme.palette.primary.main,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          <Toolbar>
            <AnalyticsIcon sx={{ mr: 2 }} />
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold',
                letterSpacing: 1 
              }}
            >
              Artisthan Dashboard
            </Typography>
            <Button 
  variant="contained"
  color="secondary"
  startIcon={<TrendingUpIcon />}
  onClick={exportToExcel}
>
  Export Report
</Button>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="xl" sx={{ 
          flexGrow: 1, 
          py: 3, 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          <Grid container spacing={3}>
            {/* Country & Product Selection */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardHeader 
                  title="Global Filters" 
                  avatar={<ShoppingBagIcon />}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Select Country</InputLabel>
                        <Select
                          value={selectedCountry}
                          label="Select Country"
                          onChange={handleCountryChange}
                        >
                          {countryData.map((data) => (
                            <MenuItem 
                              key={data.country} 
                              value={data.country}
                            >
                              {data.icon} {data.country}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Select Product</InputLabel>
                        <Select
                          value={selectedProduct}
                          label="Select Product"
                          onChange={handleProductChange}
                        >
                          {Object.keys(productSalesData).map((product) => (
                            <MenuItem key={product} value={product}>
                              {product}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Country Details */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardHeader 
                  title={`${selectedCountry} Details`}
                  avatar={selectedCountryData.icon}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">
                        <strong>Imports from India</strong>
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${selectedCountryData.indiaImports}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">
                        <strong>Total Shipments</strong>
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {selectedCountryData.shipments}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle1">
                        <strong>Average Rating</strong>
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {selectedCountryData.avgRating} ★
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Sales Chart */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardHeader 
                  title={`${selectedProduct} Sales Trend`}
                  avatar={<TrendingUpIcon />}
                />
                <CardContent>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={splineOptions}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;