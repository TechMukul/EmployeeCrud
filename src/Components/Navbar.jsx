import React from "react";
import { AppBar, Toolbar,  styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #111111;
  position:static;
`;
const Tab=styled(NavLink)`
font-size:20px;
margin-right:30px;
color:white;
text-decoration:none;
`
function Navbar() {
  return (
    <div>
      <Header>
        <Toolbar>
          <Tab to="/">Code for interview</Tab>
          <Tab to="/all">All user</Tab>
          <Tab to="/add">Add user</Tab>
        
        </Toolbar>
      </Header>
    </div>
  );
}

export default Navbar;
