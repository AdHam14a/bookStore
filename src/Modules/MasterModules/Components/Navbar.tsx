import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "#393280"}}>
          <Toolbar sx={{ justifyContent: "space-between"}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6" component="div" sx={{ fontSize: '0.950rem' }}>
              +91 8374902234
              </Typography>
            </Box>
            <Box>
              <FacebookIcon sx={{ mr: 2 }} />
              <InstagramIcon sx={{ mr: 2 }} />
              <LinkedInIcon sx={{mr: 2}}/>
              <TwitterIcon sx={{mr: 1}}/>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
