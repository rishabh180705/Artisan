// Import necessary modules
import React, { useState } from 'react';
import {
    Button,
    Typography,
    Container,
    Box,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import './index.css';

const ArtisanProductListing = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Handcrafted Vase',
            type: 'Ceramics',
            description: 'A beautifully handcrafted vase made with love and precision.',
            artisan: 'Rajesh Kumar',
            pahchanId: 'PAH12345',
            status: 'Available',
        },
        {
            id: 2,
            name: 'Wooden Sculpture',
            type: 'Woodwork',
            description: 'An intricately carved wooden sculpture.',
            artisan: 'Rajesh Kumar',
            pahchanId: 'PAH12345',
            status: 'Out of Stock',
        },
        {
            id: 3,
            name: 'Embroidered Shawl',
            type: 'Textiles',
            description: 'A warm shawl with exquisite embroidery.',
            artisan: 'Suresh Verma',
            pahchanId: 'PAH67890',
            status: 'Available',
        },
        {
            id: 4,
            name: 'Metal Lantern',
            type: 'Metalwork',
            description: 'A decorative lantern made from fine metal.',
            artisan: 'Suresh Verma',
            pahchanId: 'PAH67890',
            status: 'Available',
        },
        {
            id: 5,
            name: 'Terracotta Pot',
            type: 'Pottery',
            description: 'A durable and stylish terracotta pot.',
            artisan: 'Pooja Devi',
            pahchanId: 'PAH11223',
            status: 'Out of Stock',
        },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, status: newStatus } : product
            )
        );
    };

    return (
        <Container maxWidth="lg" className="product-listing-container">
            <Typography variant="h3" gutterBottom textAlign="center" className="title">
                Artisan Product Listing
            </Typography>

            <Box className="product-list">
                {products.map((product) => (
                    <Card key={product.id} className="product-card">
                        <CardContent>
                            <Typography variant="h5" className="product-name">
                                {product.name}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Type:</strong> {product.type}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Description:</strong> {product.description}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Artisan:</strong> {product.artisan}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Pahchan ID:</strong> {product.pahchanId}
                            </Typography>
                            <Typography variant="body1" className={`status ${product.status.toLowerCase()}`}>
                                <strong>Status:</strong> {product.status}
                            </Typography>

                            <FormControl fullWidth className="status-dropdown">
                                <InputLabel>Status</InputLabel>
                                <Select
                                    value={product.status}
                                    onChange={(e) => handleStatusChange(product.id, e.target.value)}
                                >
                                    <MenuItem value="Available">Available</MenuItem>
                                    <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default ArtisanProductListing;


