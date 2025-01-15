import { Box, Typography } from "@mui/material";
import footerImage from "../../../assets/Images/footer.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
  return (
    <>
      <Box sx={{ color: "white", backgroundColor: "#ED553B", padding: "120px" }}>
        <Box sx={{ display:"flex" , justifyContent:"space-between"}}>
          <Box>
            <img
              src={footerImage}
              alt="footer Image"
              style={{
                width: "50px",
                filter: "brightness(0) invert(1)", 
                marginBottom:"10px"
            }}
            />
            <Typography variant="subtitle1" component="p" sx={{mb:"20px"}}>
              Nostrud exercitation ullamco laboris nisi
              <br /> ut aliquip ex ea commodo consequat.
            </Typography>
            <Box>
              <FacebookRoundedIcon sx={{mr:"25px"}}/>
              <LinkedInIcon sx={{mr:"25px"}}/>
              <TwitterIcon sx={{mr:"25px"}}/>
              <YouTubeIcon sx={{mr:"25px"}}/>
            </Box>
            
          </Box>
          <Box>
            <Typography>
              <Typography variant="h6" sx={{mb:"20px"}}>COMPANY</Typography>
              <Typography variant="subtitle1">HOME</Typography>
              <Typography variant="subtitle1">ABOUT US</Typography>
              <Typography variant="subtitle1">BOOKS </Typography>
              <Typography variant="subtitle1">NEW RELEASE</Typography>
              <Typography variant="subtitle1">CONTACT US</Typography>
              <Typography variant="subtitle1">BLOG</Typography>
            </Typography>
          

          </Box>
          <Box>
            <Typography>
              <Typography variant="h6" sx={{mb:"20px"}}>IMPORTANT LINKS </Typography>
              <Typography variant="subtitle1">PRIVACY POLICY</Typography>
              <Typography variant="subtitle1">FAQs</Typography>
              <Typography variant="subtitle1">TERMS OF SERVICE </Typography>
            </Typography>
          </Box>
        </Box>
        <Typography variant="subtitle1" component="p" sx={{mt:"50px",width:"100%",display:"flex" , justifyContent:"space-between"}}>
              <Typography variant="subtitle1" component="p">
                © 2022 Arihant. All Rights Reserved. 
              </Typography>
              <Typography variant="subtitle1" component="p">
                Privacy | Terms of Service
              </Typography>
            </Typography>
      </Box>
    </>
  );
}
