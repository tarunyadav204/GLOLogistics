import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActions,
} from "@mui/material";

const ContactCards = () => {
    return (
        <>
            {/* Sales */}
            <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3}>
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg"
                        alt="Sales team"
                    />

                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Sales
                        </Typography>

                        <Typography variant="body2">
                            Contact our sales team for any queries related to sales.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" variant="contained" color="warning">
                            Sales
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Support */}
            <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3}>
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                        alt="Support team"
                    />

                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>

                        <Typography variant="body2">
                            Contact our support team for any queries related to support.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" variant="contained" color="warning">
                            Support
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Procurement */}
            <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3}>
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                        alt="Procurement team"
                    />

                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Procurement
                        </Typography>

                        <Typography variant="body2">
                            Contact our procurement team for any queries related to procurement.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" variant="contained" color="warning">
                            Procurement
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default ContactCards;
