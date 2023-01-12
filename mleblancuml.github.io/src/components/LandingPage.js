import { Container, Typography } from "@mui/material";

export default function LandingPage() {
    return (
        <Container sx={{ justifyContent: "center", textAlign: "center" }}>
            <Typography component="p">
                Hi, and welcome to my portfolio site!
            </Typography>
            <br />
            <Typography component="p">
                I am an Associate Production Software Engineer at Oracle Cerner. I am interested in frontend and backend web development, however I'm always open to learn about other fields as well.

            </Typography>
        </Container>
    );
}