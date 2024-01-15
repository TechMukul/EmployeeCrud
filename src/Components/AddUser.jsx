import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Adduser } from "./service/api";
import { useNavigate } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
function AddUser() {
  const initialValue = {
    name: " ",
    username: " ",
    email: " ",
    phone: " ",
  };
  const [user, setuser] = useState(initialValue);
  const navigate =useNavigate();

  const onValuechange = (e) => {
    // console.log(e.target.name,e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const Adduserdetails = async() => {
    await Adduser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4" align="center">
        Add Users
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>username</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>email</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>phone</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button onClick={() => Adduserdetails()} variant="contained">
          Add user
        </Button>
      </FormControl>
    </Container>
  );
}

export default AddUser;
