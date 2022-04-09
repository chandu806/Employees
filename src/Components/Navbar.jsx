import React from "react";
import {Login} from "./Login"
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration : none;
  margin:50px;
  color:red;
  // background-color:blue;
  

`

export const Navbar = () => {
  return (
    <div>
      <StyledLink to="/Home">Home</StyledLink>
      <StyledLink to="/Login">Login</StyledLink>
      <StyledLink to="/Register">Register</StyledLink>
      <StyledLink to="/employees">Employees</StyledLink>
     
     
    </div>
  )
}