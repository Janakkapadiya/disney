import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                 <Logo1 src="/images 2/cta-logo-one.svg" />
                 <Signup>GET ALL THERE</Signup>
                 <Description>
                 2021 Disney Accelerator Participants Announced About The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world’s premier entertainment company.  
                 </Description>
                 <Logo2 src="/images 2/cta-logo-two.png" />
            </Content>
        </Container>
    )
}

export default Login

const Container=styled.div`
  position:relative;
  height:calc(100vh - 70px);
  display:flex;
  align-items:center;
  justify-content:center;
  

  &:before { 
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image: url("/images 2/login-background.jpg");
    content:"";
    position:absolute;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    opacity:0.7;
    z-index:-1;
}

`
const Content = styled.div`
 max-width:650px;
 padding:80px 40px;
 width:80%;
 display:flex;
 flex-direction:column;
 margin-bottom: 100px;

`

const Logo1=styled.img`
padding:10px;

`
const Signup= styled.a`
width:100%;
background-color:blue;
font-weight:bold;
padding:17px 0;
border-radius:10px;
text-align:center;
cursor:pointer;
font-size:18px;
transition:all 250ms;
letter-spacing:1.5px;
margin-bottom: 12px;
margin-top: 8px;


&:hover{
   background:lightblue;
   transform:scaley(1.05);
   

}

`
const Description= styled.div`
  font-size:11px;
  letter-spacing:1.5px;
  text-align: center;
  line-height:1.5;

`
const Logo2=styled.img`
padding:10px;

`
