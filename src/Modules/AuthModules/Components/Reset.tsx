import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function Reset() {

  interface user {
    email: string;
    password: string;
    otp: string
  }

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<user>();

  const onSubmit = async(data:any) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/reset-password",
        data
      );
      toast.success("Success");
      console.log(response?.data);
      navigate("/login");
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };

  return (<>
    <Grid sx={{ width: "100%" }}>
      <Typography component="h1" variant="h5" fontWeight="bold">
        Reset your password
      </Typography>
    </Grid>
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: "4", width: "100%" }}
    >
      <TextField
        label="Email"
        required
        fullWidth
        id="email"
        type="email"
        autoComplete="email"
        placeholder="john@gmail.com"
        sx={{
          backgroundColor: "#F4F4FF",
          mt: 2,
        }}
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", { required: "This is required" })}
      />
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: "#757575",
        }}
      ></Typography>
      <TextField
        label="password"
        required
        fullWidth
        id="password"
        type="password"
        autoComplete="password"
        placeholder="123456"
        sx={{
          backgroundColor: "#F4F4FF",
          mt: 2,
        }}
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register("password", { required: "This is required" })}
      />
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: "#757575",
        }}
      ></Typography>
      <TextField
        label="otp"
        required
        fullWidth
        id="otp"
        type="text"
        autoComplete="otp"
        placeholder="1325648"
        sx={{
          backgroundColor: "#F4F4FF",
          mt: 2,
        }}
        error={!!errors.otp}
        helperText={errors.otp?.message}
        {...register("otp", { required: "This is required" })}
      />
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: "#757575",
        }}
      ></Typography>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          fontSize: "18px",
          py: 1,
          mt: 6,
          backgroundColor: "#EF6B4A",
          "&:hover": {
            backgroundColor: "#Ee6B4c",
          },
        }}
      >
        Update
      </Button>
    </Box>
  </>
  )
}
