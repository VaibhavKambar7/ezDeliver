import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";  
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImg from 'client/src/assets/images/farm.jpeg';


function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function signup() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  //1

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
        sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: 2,
            
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 3,
              mt: 0,
              border: "2px solid #ccc",
              borderRadius: 2,
            }}
          >
           
            <Typography component="h1" variant="h5" textAlign="center">
              Create A New Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center", }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phoneno"
                    label="Phone Number"
                    name="phoneno"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="otp"
                    label="OTP "
                    id="otp"
                  />
                </Grid>
               
                <Grid container justifyContent="flex-end">
                <Grid  xs={12} sm={3} item>
                  <Link href="#" variant="body2">
                  Resend OTP
                  </Link>
                </Grid>
              </Grid>

              
              </Grid >
              <Grid display="flex" justifyContent="center">

            <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 6,
                  mb: 2,
                  backgroundColor: "",
                  // "&:hover": {
                  //   backgroundColor: "darkGreen",
                  // },
                  alignItems: "center"
                }}
                >
                Send OTP
              </Button>
                </Grid>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}