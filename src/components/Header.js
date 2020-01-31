import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../index.css"

const NavStyle= styled.nav`
margin: 0 auto;
display: flex; 
justify-content: space-evenly;
backgroundColor: black;
border: 2px solid white;
width: 80%;
`


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavStyle>
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/characters" className="link">Characters</NavLink>
          <NavLink to="/episodes" className="link">Episodes</NavLink>
          <NavLink to="/location" className="link">Location</NavLink>
        </NavStyle>
    </header>
  );
}