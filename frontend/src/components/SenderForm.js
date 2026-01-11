import { useState } from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    TextField,
    Button,
    Paper,
    Grid,
} from "@mui/material";

const steps = [
    "Sender Details",
    "Recipient Details",
    "Shipment Details",
    "Agreement",
];

const SenderForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const [senderData, setSenderData] = useState({
        name: "",
        email: "",
        phone: "",
        taxId: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSenderData({ ...senderData, [name]: value });
    };

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <Paper sx={{ p: 4, maxWidth: 1000, margin: "auto" }}>
            {/* Stepper */}
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* Step Content */}
            <Box sx={{ mt: 4 }}>
                {activeStep === 0 && (
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                name="name"
                                fullWidth
                                value={senderData.name}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                fullWidth
                                value={senderData.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone"
                                name="phone"
                                fullWidth
                                value={senderData.phone}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Tax ID"
                                name="taxId"
                                fullWidth
                                value={senderData.taxId}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                name="address"
                                fullWidth
                                multiline
                                rows={2}
                                value={senderData.address}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                )}

                {activeStep === 1 && <p>Recipient Details (next step)</p>}
                {activeStep === 2 && <p>Shipment Details (next step)</p>}
                {activeStep === 3 && <p>Agreement (final step)</p>}
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                <Button
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    color="warning"
                    onClick={handleNext}
                >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
            </Box>
        </Paper>
    );
};

export default SenderForm;
