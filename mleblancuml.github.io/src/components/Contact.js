import Container from '@mui/material/Container';

export default function Contact() {
    return (
        <Container sx={{ justifyContent: "center", textAlign: "center" }}>
            <h1>Contact Information</h1>

            <p>
                <a href="https://github.com/MMLeBlanc">Github</a>
                <br />
                <a href="https://www.linkedin.com/in/matt-m-leblanc/">LinkedIn</a>
                <br />
                <a href="mailto:atthewmleblanc@gmail.com">matthewmleblanc@gmail.com</a>
            </p>
        </Container>
    );
}