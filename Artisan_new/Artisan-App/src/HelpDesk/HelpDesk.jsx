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
    CardActions,
    Snackbar,
    Alert,
    Input,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    marginBottom: '20px',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

const ArtisanHelpdesk = () => {
    const [pahchanId, setPahchanId] = useState('');
    const [otp, setOtp] = useState('');
    const [detailsFetched, setDetailsFetched] = useState(false);
    const [artisanDetails, setArtisanDetails] = useState(null);
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [productImage, setProductImage] = useState(null);

    const handleVerifyPahchanId = () => {
        if (pahchanId.trim() === '') {
            setError('Pahchan ID cannot be empty.');
            setSnackbarMessage('Pahchan ID cannot be empty.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            return;
        }
        setError('');
        setSnackbarMessage('Pahchan ID verified successfully.');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setStep(2);
    };

    const handleSendOtp = () => {
        setSnackbarMessage('OTP sent to registered mobile number.');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
    };

    const handleVerifyOtp = () => {
        if (otp === '123456') {
            setDetailsFetched(true);
            setArtisanDetails({
                name: 'Rajesh Kumar',
                phone: '9627962812',
                email: 'john.doe@example.com',
            });
            setError('');
            setSnackbarMessage('OTP verified successfully.');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setStep(3);
        } else {
            setError('Invalid OTP. Please try again.');
            setSnackbarMessage('Invalid OTP. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleProductImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProductImage(event.target.files[0]);
        }
    };

    const handleUploadProduct = (e) => {
        e.preventDefault();
        // Logic to upload product details
        setSnackbarMessage('Product uploaded successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Container maxWidth="md" className="artisan-helpdesk">
            <Typography variant="h3" gutterBottom textAlign="center">
                Artisan Helpdesk
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

            {error && (
                <Typography variant="body1" color="error" gutterBottom>
                    {error}
                </Typography>
            )}

            {step === 1 && (
                <StyledCard>
                    <CardContent>
                        <Typography variant="h5">Enter your Pahchan ID</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Pahchan ID"
                            variant="outlined"
                            value={pahchanId}
                            onChange={(e) => setPahchanId(e.target.value)}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleVerifyPahchanId}
                            fullWidth
                        >
                            Verify Pahchan ID
                        </Button>
                    </CardActions>
                </StyledCard>
            )}

            {step === 2 && (
                <StyledCard>
                    <CardContent>
                        <Typography variant="h5">Mobile Number: 9627962812</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSendOtp}
                            fullWidth
                            style={{ marginBottom: '16px' }}
                        >
                            Send OTP
                        </Button>
                        <Typography variant="h5">Enter OTP</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="OTP"
                            variant="outlined"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleVerifyOtp}
                            fullWidth
                        >
                            Verify OTP
                        </Button>
                    </CardActions>
                </StyledCard>
            )}

            {step === 3 && detailsFetched && artisanDetails && (
                <StyledCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Welcome, {artisanDetails.name}
                        </Typography>
                        <form onSubmit={handleUploadProduct}>
                            <Typography variant="h6">Upload Your First Product</Typography>
                            <TextField fullWidth margin="normal" label="Product Name" variant="outlined" required />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Description"
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                            />
                            <TextField fullWidth margin="normal" label="Price" type="number" variant="outlined" required />
                            <TextField fullWidth margin="normal" label="Demand" variant="outlined" required />
                            <TextField fullWidth margin="normal" label="Dimensions" variant="outlined" required />
                            <TextField fullWidth margin="normal" label="Type of Product" variant="outlined" required />
                            <Box mt={2}>
                                <Typography variant="h6" gutterBottom>
                                    Upload Product Image
                                </Typography>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProductImageChange}
                                    fullWidth
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Button variant="contained" color="primary" type="submit" fullWidth>
                                    Upload Product
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </StyledCard>
            )}
        </Container>
    );
};

export default ArtisanHelpdesk;

