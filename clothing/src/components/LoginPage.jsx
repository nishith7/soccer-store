import {
  Box,
  Grid,
  //   Stack,
  Typography,
  //   Paper,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Link,
} from "@mui/material";
import aboutus from "../assets/aboutus.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

  const navigate = useNavigate();
  const loginInitialState = {
    email:{
        value:'',
        error: false,
        errorMsg: 'Email not found.'

    },
    password:{
        value:'',
        error: false,
        errorMsg: 'Wrong Password'

    }
}
  const [formData, setFormData] = useState(loginInitialState);
  const setData=({ key, error, data, errorMsg })=>{
    setFormData({
        ...formData,
        [key]:{
            ...formData[key],
            error,
            value: data === undefined ? formData[key].value:data,
            errorMsg: errorMsg || formData[key].errorMsg
        }
    }
    )
  }
  const [isLogin, setIsLogin] = useState(true);
//   let msg = 'Error';

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/v1/login`, {
        email: formData.email.value,
        password: formData.password.value,
      })
      .then((response) => {
        if(response.data.token){
            setIsLogin(true);
            navigate("/home");
        }
      }).catch((error)=>{
        setIsLogin(false);
        console.log(error);
        if(error.response.status === 404){
            setData({
                key: 'email',
                data: e.target.value.trim(),
                error: true,
              })

        }else if(error.response.status === 403){
            setData({
                key: 'password',
                data: e.target.value.trim(),
                error: true,
              })
        }
            
      })
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${aboutus})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item>
        <Box
          height={450}
          width={450}
          sx={{
            my: 12,
            mx: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={"/soccerlogo.png"} height={50} alt="current"></img>
          <Typography component="h1" variant="h5" marginTop={4}>
            Sign in
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
                if (e.target.value.trim() === '')
                  setData({
                    key: 'email',
                    data: e.target.value.trim(),
                    error: false,
                  });
                else
                  setData({
                    key: 'email',
                    data: e.target.value.trim(),
                    error: false,
                  });
              }}
            // onBlur={(e) => {
            //     if (e.target.value.trim() === '')
            //       setData({
            //         key: 'email',
            //         error: false,
            //       });
            //     else
            //       setData({
            //         key: 'email',
            //         error: true,
            //       });
            //   }}
            value={formData.email.value}
            error={formData.email.error}
            helperText={
                formData.email.error ?
                formData.email.errorMsg:null
            }
            // error={msg}
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // onChange={(e) => setPassword(e.target.value)}
            helperText={
                formData.password.error ?
                formData.password.errorMsg:null
            }
            value={formData.password.value}
            error={formData.password.error}
            onChange={(e) => {
                if (e.target.value.trim() === '')
                  setData({
                    key: 'password',
                    data: e.target.value.trim(),
                    error: false,
                  });
                else
                  setData({
                    key: 'password',
                    data: e.target.value.trim(),
                    error: false,
                  });
              }}
            //   onBlur={(e) => {
            //     if (e.target.value.trim() === '')
            //       setData({
            //         key: 'password',
            //         error: false,
            //       });
            //     else
            //       setData({
            //         key: 'password',
            //         error: true,
            //       });
            //   }}
            // error={true}
            // helperText={msg}
          />
         
          <FormControlLabel sx={{marginRight:38}}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            onClick={(e) => handleSubmit(e)}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
     
    </Grid>
    
  );
};

export default LoginPage;
