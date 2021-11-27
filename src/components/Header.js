/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images 2/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images 2/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images 2/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images 2/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images 2/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images 2/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images 2/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images 2/808293.jpg" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
height: 70px;
background-color:darkblue;
color:white;
display: flex;
align-items: center;
padding: 3px 2px 5px 3px;
overflow-x:hidden;

`
const Logo = styled.img`
width:80px;
padding-bottom:12px; 


`
const NavMenu = styled.div`
display:flex;
flex:1; 
margin-left:25px;
align-items:center; 

a{
    display: flex;
    align-items: center;
    padding:0 12px;
    cursor:pointer;

    img{
          height:20px;
      }
      
    span{
        font-size:13px;
        padding:1px 0 0 1px;
        letter-spacing: 1.5px;
        position:relative;

        &:after { 
            content: "";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity: 0;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform-origin:left center;
            transform:'scaleX(0)';
             

        }
    }

    &:hover {
          span:after{
              transform:scaleX(1);
              opacity:1;
               
          }
    }
}

`

const UserImg = styled.img`
width:50px;
height:50px;
border-radius: 50%;
cursor=pointer;


`