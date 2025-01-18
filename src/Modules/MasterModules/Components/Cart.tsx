import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import {
  useStripe,
  CardElement,
  AddressElement,
  useElements,
} from "@stripe/react-stripe-js";
import { FormEvent } from "react";

export default function Cart() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent)=>{
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElements = elements.getElement(CardElement);
    const addressElements = elements.getElement(AddressElement);

    if (!cardElements || !addressElements) {
      return;
    }

    const address = await addressElements.getValue();
    const { error, token } = await stripe.createToken(cardElements);
    console.log(token);

    if (error) {
      console.log(error);
    }
    else {
      if (address.complete) {
        const id = cartID;
        const data = {
          token: token.id,
            delivery_address:{
              country: address.value.address.country,
              city: address.value.address.city,
              state: address.value.address.state,
              building:1,
              street: "street",
              floor: 1,
              appartment: 1,
              mobile: address.value.phone,
              additional_info: "additional_info",
              location: {
                type: "Point",
                coordinates:[30.0444,31.2357],
              },
          },
        }
      }
    }
  }
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFFFF", color: "black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: "80px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: "0.950rem" }}
            >
              <DashboardIcon
                onClick={() => navigate("/dashboard")}
                sx={{
                  backgroundColor: "#ED553B",
                  color: "#FFFFFF",
                  border: "2px solid #ED553B",
                  borderRadius: "5px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#ED553B",
                    backgroundColor: "#FFFFFF",
                  },
                }}
              />
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "65px" }}
          >
            <Avatar src="/broken-image.jpg" sx={{ cursor: "pointer" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PersonOutlinedIcon
              sx={{ mr: 3, cursor: "pointer", "&:hover": { color: "#EF6B4A" } }}
            />
            <ShoppingBagOutlinedIcon
              sx={{ mr: 3, cursor: "pointer", "&:hover": { color: "#EF6B4A" } }}
            />
            <FavoriteBorderRoundedIcon
              sx={{ cursor: "pointer", "&:hover": { color: "#EF6B4A" } }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75px",
          background: "linear-gradient(90deg,#FFE5E5,#F5FFFE)",
          color: "#393280",
        }}
      >
        <Typography component="h5" variant="h5">
          HOME / CART
        </Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 2 }}>
        <Box></Box>
        <Box>
          <Box
            sx={{
              background: "linear-gradient(90deg,#FFE5E5,#F5FFFE)",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mt: "25px",
              height: "200px",
              gap: "20px",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ textAlign: "center" }}
            >
              Payment Info
            </Typography>
            <Divider sx={{ mb: "2px" }} />
            <CardElement />
          </Box>
          <Box
            sx={{
              background: "linear-gradient(90deg,#FFE5E5,#F5FFFE)",
              borderRadius: "15px",
              mt: "35px",
              padding: "35px",
              mb: "40px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap:"20px"
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ textAlign: "center" }}
            >
              Address Info
            </Typography>
            <Divider sx={{ mb: "2px" }} />
            <AddressElement
              options={{
                mode: "shipping",
                fields: {
                  phone: "always",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
