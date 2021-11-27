/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

function Viwers() {
    return (
        <Container>
            <Wrap>
              <img src="/images 2/viewers-disney.png" />
            </Wrap>
            <Wrap>
              <img src="/images 2/viewers-marvel.png" />
            </Wrap>
            <Wrap>
              <img src="/images 2/viewers-national.png" />
            </Wrap>
            <Wrap>
              <img src="/images 2/viewers-pixar.png" />
            </Wrap>
            <Wrap>
              <img src="/images 2/viewers-starwars.png" />
            </Wrap> 
        </Container>
    )
}

export default Viwers

const Container=styled.div`
margin-top:30px;
display:grid; 
padding: 30px 0 25px 0;
grid-gap:25px;
grid-template-columns:repeat(5,minmax(0,1fr));


`
const Wrap=styled.div`
border-radius:10px;
cursor: pointer;
border:3px solid gray;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%)0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover{
    
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%)0px 30px 22px -10px;
    transform:scale(1.05);
    border-color:rgb(249,249,249,0.8); 
     
}

`