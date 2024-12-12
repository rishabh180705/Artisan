// Import necessary modules
import React, { useState } from 'react';
import {
    Button,
    TextField,
    Typography,
    Container,
    Box,
    Card,
    CardContent,
    Snackbar,
    Alert,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    marginBottom: '20px',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

const sendOrderMail = (artisan, products) => {
    // Simulate sending an email
    console.log("Sending email with the following details:");
    console.log(`Name: ${artisan.name}`);
    console.log(`Pahchan ID: ${artisan.pahchanId}`);
    products.forEach((product, index) => {
        console.log(`Product ${index + 1}:`);
        console.log(`- Name: ${product.name}`);
        console.log(`- Type: ${product.type}`);
        console.log(`- Description: ${product.description}`);
    });
    alert("Email sent successfully!");
};

const FirstOrderPage = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    // Dummy artisan and product data
    const artisansWithProducts = [
        {
            artisan: { name: 'Rajesh Kumar', pahchanId: 'PAH12345' },
            products: [
                {
                    name: 'Handcrafted Vase',
                    type: 'Ceramics',
                    description: 'A beautifully handcrafted vase made with love and precision.',
                },
                {
                    name: 'Wooden Sculpture',
                    type: 'Woodwork',
                    description: 'An intricately carved wooden sculpture.',
                },
            ],
        },
        {
            artisan: { name: 'Suresh Verma', pahchanId: 'PAH67890' },
            products: [
                {
                    name: 'Embroidered Shawl',
                    type: 'Textiles',
                    description: 'A warm shawl with exquisite embroidery.',
                },
                {
                    name: 'Metal Lantern',
                    type: 'Metalwork',
                    description: 'A decorative lantern made from fine metal.',
                },
            ],
        },
        {
            artisan: { name: 'Pooja Devi', pahchanId: 'PAH11223' },
            products: [
                {
                    name: 'Terracotta Pot',
                    type: 'Pottery',
                    description: 'A durable and stylish terracotta pot.',
                },
            ],
        },
    ];

    const handleSendMail = (artisan, products) => {
        try {
            sendOrderMail(artisan, products);
            setSnackbarMessage(`Order email sent successfully to ${artisan.name}!`);
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
        } catch (error) {
            setSnackbarMessage('Failed to send email. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h3" gutterBottom textAlign="center">
                First Order Details
            </Typography>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            {artisansWithProducts.map(({ artisan, products }, index) => (
                <StyledCard key={index}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Artisan Details
                        </Typography>
                        <Typography variant="body1"><strong>Name:</strong> {artisan.name}</Typography>
                        <Typography variant="body1"><strong>Pahchan ID:</strong> {artisan.pahchanId}</Typography>

                        <Typography variant="h6" gutterBottom mt={2}>
                            Products
                        </Typography>
                        {products.map((product, productIndex) => (
                            <Box key={productIndex} mb={2}>
                                <Typography variant="body1"><strong>Product {productIndex + 1}:</strong></Typography>
                                <Typography variant="body2">- Name: {product.name}</Typography>
                                <Typography variant="body2">- Type: {product.type}</Typography>
                                <Typography variant="body2">- Description: {product.description}</Typography>
                            </Box>
                        ))}

                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleSendMail(artisan, products)}
                                fullWidth
                            >
                                Send Order Email
                            </Button>
                        </Box>
                    </CardContent>
                </StyledCard>
            ))}
        </Container>
    );
};


export default FirstOrderPage;
