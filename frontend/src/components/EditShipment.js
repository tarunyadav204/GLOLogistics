import { useState } from "react";
import {
    Grid,
    TextField,
    Typography,
    MenuItem,
    Button,
    Paper,
    Box,
} from "@mui/material";

const statusOptions = ["Pending", "In Transit", "Delivered"];
const shippingModes = ["Air", "Sea", "Road"];
const paymentModes = ["DDU", "DDP"];

const EditShipment = () => {
    const [formData, setFormData] = useState({
        shipmentId: "OJ2L4N",
        customer: "Carlos Silva",
        origin: "Buenos Aires, Argentina",
        destination: "Berlin, Germany",
        status: "Delivered",
        price: "40000",
        shipmentDate: "2024-01-20",
        arrivalDate: "2024-01-30",
        assignee: "Ava Taylor",
        paymentMode: "DDU",
        shippingMode: "Air",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        console.log("Updated Shipment:", formData);
        alert("Shipment updated successfully");
    };

    const handleCancel = () => {
        alert("Edit cancelled");
    };

    return (
        <Paper elevation={3} sx={{ p: 4, maxWidth: 900, margin: "auto" }}>
            {/* Shipment ID */}
            <Typography variant="h6" align="center" gutterBottom>
                {formData.shipmentId}
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Customer"
                        name="customer"
                        value={formData.customer}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Origin"
                        name="origin"
                        value={formData.origin}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Destination"
                        name="destination"
                        value={formData.destination}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Status"
                        name="status"
                        value={formData.status}
                        fullWidth
                        onChange={handleChange}
                    >
                        {statusOptions.map((status) => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        value={formData.price}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Shipment Date"
                        name="shipmentDate"
                        type="date"
                        value={formData.shipmentDate}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Arrival Date"
                        name="arrivalDate"
                        type="date"
                        value={formData.arrivalDate}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Assignee"
                        name="assignee"
                        value={formData.assignee}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Payment Mode"
                        name="paymentMode"
                        value={formData.paymentMode}
                        fullWidth
                        onChange={handleChange}
                    >
                        {paymentModes.map((mode) => (
                            <MenuItem key={mode} value={mode}>
                                {mode}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Shipping Mode"
                        name="shippingMode"
                        value={formData.shippingMode}
                        fullWidth
                        onChange={handleChange}
                    >
                        {shippingModes.map((mode) => (
                            <MenuItem key={mode} value={mode}>
                                {mode}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>

            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                <Button variant="outlined" sx={{ mr: 2 }} onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="contained" color="warning" onClick={handleSave}>
                    Save
                </Button>
            </Box>
        </Paper>
    );
};

export default EditShipment;
