import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  interface user {
    first_name: string;
    last_name: string;
    role: string;
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/register",
        data
      );
      toast.success("Success");
      console.log(response?.data);
      navigate("/login");
    } catch (error:any) {
      if (error.response) {
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
      }
      toast.error("Failed");
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
          Welcome
        </Typography>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Register
        </Typography>
      </Grid>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: "4", width: "100%" }}
      >
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <TextField
              label="First Name"
              required
              id="first_name"
              type="text"
              autoComplete="first_name"
              placeholder="john"
              sx={{ backgroundColor: "#F4F4FF" }}
              error={!!errors.first_name}
              helperText={errors?.first_name?.message}
              {...register("first_name", { required: "This is required" })}
            />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TextField
              label="Last Name"
              required
              id="last_name"
              type="text"
              autoComplete="last_name"
              placeholder="doe"
              sx={{ backgroundColor: "#F4F4FF" }}
              error={!!errors.last_name}
              helperText={errors?.last_name?.message}
              {...register("last_name", { required: "This is required" })}
            />
          </Grid>
        </Grid>

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
          helperText={errors?.email?.message}
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
          helperText={errors?.password?.message}
          {...register("password", { required: "This is required" })}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#757575",
          }}
        ></Typography>

<FormControl
  fullWidth
  required
  sx={{ backgroundColor: "#F4F4FF", mt: 2 }}
>
  <InputLabel id="role-label">Role</InputLabel>
  <Select
    id="role"
    label="Role" 
    {...register("role", { required: "This is required" })}
    error={!!errors.role}
    displayEmpty 
  >
    <MenuItem value="" disabled>Select a role</MenuItem> 
    <MenuItem value="Admin">Admin</MenuItem>
    <MenuItem value="Customer">Customer</MenuItem>
  </Select>
  {errors.role && (
    <FormHelperText error>{errors?.role?.message}</FormHelperText>
  )}
</FormControl>

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
          Register
        </Button>
      </Box>
    </>
  );
}
