import React from 'react';
import styled from "styled-components"
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import {Link} from 'gatsby'

const Navbar = styled.div`
  margin-top: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightGray;
  padding: 0 20px;
  border-radius: 10px;
`

const NavItems = styled(Link)`
  color: black;
  font-weight: 600;
  font-size: large;
  text-decoration: none;
  margin: 15px;
  position: relative;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    color: #fb2f79;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: #fb2f79;
    transition: all 0.45s;
  }

  &:hover::before {
    width: 100%;
  }
`
const Icon = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-left: 50px;
  display: inline;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 250%;

  &:hover{
    background-color: lightGray;

  }

`

const Sign = styled.span`
  font-weight: bold;
  cursor: pointer;
`

const Button = styled.button`
  border:none;
  margin: 5px;
  padding: 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: small;
  background-color:#FB2F79 ;
  border-radius: 20px;
  width: auto;
  height: auto;
  color: white;
  cursor: pointer;

`
const NavBar = () => {
    return (
        <Navbar className="Navbar">
      <img
      alt=' hh'
        style={{width:"120px"}}
        src="https://raw.githubusercontent.com/Fahid24/business-site-task-css/main/src/Images/images-removebg-preview.png"
      />

      <div className={`nav-items`}>
        <NavItems to="/home">Products</NavItems>
        <NavItems to="/about">Resources</NavItems>
        <NavItems to="/service">Pricing</NavItems>
        <NavItems to="/contact">Why Barlie.oi?</NavItems>
      </div>

      <div>
        <Icon>
          <BiSearchAlt className="f-logo" />
        </Icon>
        <Icon>
          <IoIosNotificationsOutline className="f-logo" />
        </Icon>
        <Icon>
          <MdOutlineShoppingCart className="f-logo" />
        </Icon>
      </div>

      <div>
        <Sign className="">Sign up</Sign>
        <Button >start free trial</Button>
      </div>
    </Navbar>
    );
};

export default NavBar;