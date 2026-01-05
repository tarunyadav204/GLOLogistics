import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactCards from "./ContactCards";
import "../App.css";

const ContactGrid = styled(Grid)({
    marginTop: 0,
});

const ContactUs = () => {
    return (
        <div className="contact-wrapper">
            <ContactGrid
                container
                spacing={2}
                className="contact-grid"
                style={{
                    display: "flex",
                    paddingTop: 20,
                    justifyContent: "center",
                }}
            >
                <Grid item xs={12} textAlign="center">
                    <Typography
                        variant="h6"
                        gutterBottom
                        tabIndex={0}
                        className="contact-heading"
                    >
                        Contact Us
                    </Typography>

                    <Typography
                        variant="body1"
                        gutterBottom
                        tabIndex={0}
                        className="contact-description"
                    >
                        Our dedicated team of logistics experts is here for you. Whether you
                        have inquiries about cargo status or want to know more about our
                        solutions, please don't hesitate to contact us — we’ll be delighted
                        to assist you.
                    </Typography>
                </Grid>

                <Grid container spacing={2} p={5}>
                    <ContactCards />
                </Grid>
            </ContactGrid>
        </div>
    );
};

export default ContactUs;
