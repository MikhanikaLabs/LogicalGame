import React from 'react';
import { Navbar,NavItem } from 'react-materialize';

const Header =({generateValue}) =>{
    return(
        <Navbar brand={""} alignLinks="left">
        <NavItem onClick={()=>generateValue()}>
        New Game
        </NavItem>
        <NavItem href="#">
        Help
        </NavItem>
        </Navbar>
    )
}

export default Header;