import {
    FormControl,
    FormGroup,
    InputLabel,
    Input,
    Typography,
    Button,
    styled,
  } from "@mui/material";
  import React, { useState,useEffect } from "react";
  
  import {getUser, editUser } from "./service/api";
  import { useNavigate,useParams } from "react-router-dom";
  const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
      margin-top: 20px;
    }
  `;
  function Edit() {
    const initialValue = {
      name: "",
      username: "",
      email: "",
      phone: "",
    };
    const [user, setuser] = useState(initialValue);
    const navigate =useNavigate();
    const{id}=useParams();
    useEffect(()=>{
        getUserData();
    },[])
    const getUserData=async()=>{
    let response = await getUser(id);
    setuser(response.data)
    }
  
    const onValuechange = (e) => {
      // console.log(e.target.name,e.target.value);
      setuser({ ...user, [e.target.name]: e.target.value });
      console.log(user);
    };
   
    const Adduserdetails = async() => {
      await editUser(user,id);
      navigate("/all")
    };
  
    return (
      <Container>
        <Typography variant="h4" align="center">
          Edit Users
        </Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValuechange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
          <InputLabel>username</InputLabel>
          <Input onChange={(e) => onValuechange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
          <InputLabel>email</InputLabel>
          <Input onChange={(e) => onValuechange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>phone</InputLabel>
          <Input onChange={(e) => onValuechange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
          <Button onClick={() => Adduserdetails()} variant="contained">
            Edit user
          </Button>
        </FormControl>
      </Container>
    );
  }
  
  export default Edit;
  