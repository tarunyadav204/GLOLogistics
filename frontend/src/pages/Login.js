import { useState } from "react";
import "../pages/Login.css";
import {
    Box,
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleLogin = () => {
        if (formData.email && formData.password) {
            // Redux auth
            dispatch(authActions.login(formData.email));

            // Optional localStorage
            localStorage.setItem("isLoggedIn", "true");

            // Navigate after login
            navigate("/home");
        } else {
            alert("Please enter email and password");
        }
    };

    return (
        <Box className="login-container">
            {/* Overlay text */}
            <Box className="login-overlay">
                <Typography variant="h4">
                    Making the world smaller.
                </Typography>
                <Typography variant="h6">
                    Logistics Solutions for a Connected Global Village
                </Typography>
            </Box>

            {/* Login box */}
            <Paper className="login-box" elevation={4}>
                <Typography variant="h6" gutterBottom align="center">
                    Login
                </Typography>

                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={formData.password}
                    onChange={handleChange}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                        />
                    }
                    label="Remember Me"
                />

                <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    onClick={handleLogin}
                >
                    Login
                </Button>

                <Typography
                    variant="body2"
                    align="center"
                    sx={{ mt: 2, cursor: "pointer", color: "#1976d2" }}
                >
                    Forgot Password?
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
