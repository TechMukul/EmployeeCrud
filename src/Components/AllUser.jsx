import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,styled,Button
} from "@mui/material";
import React from "react";
import { getUsers,deleteUser } from "./service/api";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Styledtable=styled(Table)`
width:90%,
margin:50px auto 0px auto,
`
const Thead=styled(TableRow)`
backgound:#000,

`

function AllUser() {
  const [users,setusers]=useState([]);
  const navigate =useNavigate();

  const getUsersdetails=async()=>{
    let response  =await getUsers();
    // console.log(response);
    setusers(response.data);
  }

  const deleteUserdata=async(id)=>{
    await deleteUser(id);  
    navigate("/all");
    
  }

  useEffect(() => {
    getUsersdetails();
  }, []);


  return (
    <Styledtable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map((user,index)=>(
            <TableRow key={index}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteUserdata(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
      
      </TableBody>
    </Styledtable>
  );
}

export default AllUser;
