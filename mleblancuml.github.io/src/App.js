import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import avatar from './assets/profilePic.jpg';
import { Link, Outlet, useLocation } from 'react-router-dom';



function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Container sx={{ "justifyContent": "center", "display": "flex" }}>
        <Stack direction="column" spacing={3} sx={{ "alignItems": "center" }}>
          <Stack direction='row' spacing={5} sx={{ "alignItems": "center", "paddingBottom": "2vh" }}>
            <Avatar src={avatar} sx={{ width: "10vh", height: "10vh" }} />
            <h2>Matt LeBlanc</h2>
          </Stack>

          <Tabs value={location.pathname} sx={{ paddingBottom: "5vh" }}>
            <Tab value="/" label="Home" to="/" component={Link} />
            <Tab value="/about" label="About" to="/about" component={Link} />
            <Tab value="/projects" label="Projects" to="/projects" component={Link} />
            <Tab value="/contact" label="Contact" to="/contact" component={Link} />
          </Tabs>
        </Stack>
      </Container>
      <Outlet />
    </div>
  );
}

export default App;
