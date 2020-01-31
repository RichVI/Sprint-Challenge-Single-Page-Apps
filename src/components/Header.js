import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavStyle= styled.nav`
display: flex; 
justify-content: space-evenly;
background-color: white;
`



export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavStyle>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/episodes">Episodes</NavLink>
          <NavLink to="/location">Location</NavLink>
        </NavStyle>
    </header>
  );
}
