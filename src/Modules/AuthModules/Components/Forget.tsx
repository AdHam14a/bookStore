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


export default function Forget() {

  interface user {
    email: string;
    password: string;
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
        "https://upskilling-egypt.com:3007/api/auth/forgot-password",
        data
      );
      toast.success("Success");
      console.log(response?.data);
      navigate("/reset");
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };

  return (
    <>
      <Grid sx={{ width: "100%" }}>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Forgot your password?
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
          variant="outlined"
          sx={{
            fontSize: "18px",
            py: 1,
            mt: 1,
            mb: 2,
            color: "#6251DD",
            borderColor: "#6251DD",
            "&:hover": {
              borderColor: "#6251DD",
              backgroundColor: "rgba(98, 81, 221, 0.08)",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </>
  )
}
