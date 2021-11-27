/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images 2/bao.jpg" alt="" />
            </Background>
            <Tital>
                <img src="/images 2/bao_logo-removebg-preview.png" alt="" />
            </Tital>
            <Controls>
                <Playbutton>
                    <img src="/images 2/play-icon-black.png" alt="" />
                    <span>
                        PLAY
                    </span>
                </Playbutton>
                <Trailerbutton>
                <img src="/images 2/play-icon-white.png" alt="" />
                    <span>
                        TRAILER
                    </span>
                </Trailerbutton>
                <Addbutton>
               
                    <span>
                        +
                    </span>
                </Addbutton>
                <Groupobutton>
                      <img src="/images 2/group-icon.png" />
                </Groupobutton>
                </Controls>
                <Subtital>
                     2018 . 2h . family,kids,Animation
                 </Subtital>
                 <Description>
                      comming soon
                 </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height:calc(100vh-70px); 
padding: 0 calc(3.5vw + 5px);
position: relative;

`
const Background = styled.div`
position:fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover; 
}
`
const Tital = styled.div`
height:30vh;
width:35vw;
min-height:170px;
min-width:200px;
padding-right:60px;


img{
    width:100%;
    height:100%;
    object-fit:contain;
   
}

`
const Controls = styled.div`
     display: flex;
     padding:inherit;
     align-items:center;
 `

const Playbutton = styled.button`
 border-radius:4px;
 padding:0px 24px;
 display: flex;
 margin-right:22px; 
 font-size: 15px;
 height:50px;
 align-items: center;
 border:none;
 letter-spacing:1.8px;
 cursor:pointer;

 &:hover{
     background:lightgray;
 }

 `
const Trailerbutton = styled(Playbutton)`
 background:rgb(0,0,0,0.3);
 color:white;
 border:1px solid white;

 `
const Addbutton = styled.button`
  width:44px;
  height:44px;
  margin-right:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border:2px solid white;
  color:white;
  background-color: rgba(0,0,0,0.6);
  cursor:pointer;

  span{
      font-size:30px;
  }
 
 `
const Groupobutton = styled(Addbutton)`
    background-color:rgb(0,0,0,0.3) ;
  
 `

 const Subtital= styled.div`
 color:lightgray;
 font-size:17px;
 min-height:20px;
 margin:20px 0 0 60px;

 `

 const Description=styled(Subtital)`
      line-height:1.4;
      font-size:20px;

      margin:20px 0 0 60px;

 `