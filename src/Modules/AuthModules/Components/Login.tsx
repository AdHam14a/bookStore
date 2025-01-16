import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

export default function Login() {
  interface user {
    email: string;
    password: string;
  }

  interface AuthContextType {
    saveUserData: () => void;
  }

  const navigate = useNavigate();
  const { saveUserData } = useContext(AuthContext) as AuthContextType;

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/login",
        data
      );
      toast.success("Success");
      console.log(response?.data);
      localStorage.setItem("userToken", response?.data?.accessToken);
      saveUserData();
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<user>();

  return (
    <>
      <Grid sx={{ width: "100%" }}>
        <Typography
          variant="subtitle1"
          component="subtitle1"
          sx={{ mt: 2, color: "#6B6B87" }}
        >
          Welcome back
        </Typography>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Login to your account
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

        <Grid container alignItems="center">
          <Grid item xs>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Me"
              sx={{
                color: "#6251DD",
              }}
            />
          </Grid>
          <Grid item onClick={() => navigate("/forget")}>
            <Typography
              variant="body2"
              sx={{
                color: "#6251DD",
                cursor: "pointer",
              }}
            >
              Forgot Password ?
            </Typography>
          </Grid>
        </Grid>

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
          Login
        </Button>
        <Button
          onClick={() => {
            navigate("/register");
          }}
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
          Register
        </Button>
      </Box>
    </>
  );
}
