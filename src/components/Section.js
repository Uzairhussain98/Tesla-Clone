import React from 'react'
import styled from 'styled-components'
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";



function Section() {
  const { keyframes, animationOptions } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 1000, // Delay 1s
      duration: 1000 ,// Speed up the animation
      iterations : Infinity,
      
    },
  });
  return (
    <Wrap>
      <ItemText>
      <h1>Model S</h1>
      <p>Order Online For Touchless Delivery</p>

      </ItemText>

<Buttons>
      <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>

        <RightButton>
            Existing Inventory
          </RightButton>

      </ButtonGroup>
      <DownArrow ref={ref}  src='./images/down-arrow.svg'/>
      </Buttons>

    </Wrap>
  )
}

export default Section


const Wrap = styled.div`

width:  100vw;
height: 100vh;
background-image : url('/images/model-s.jpg');
background-size : cover ;
background-position : center ;
background-repeat : no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items : center;


    `

    const ItemText  = styled.div`
    padding-top :15vh ;
    text-align: center ;

    `

    const ButtonGroup  = styled.div`
    display : flex;
    align-items: center;
    margin-bottom:30px;
    @media(max-width: 768px){
      flex-direction: column;
    }
   

    `
    const LeftButton  = styled.div`
    background-color : rgba(23,26, 32,0.8);
    height:40px ;
    width: 256px;
    color : white;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius: 100px;
    opacity : 0.85;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
   

    `
    const RightButton  = styled(LeftButton)`
    background : white ;
    opacity : 0.65;
    color : black;
    
    `
    const DownArrow  = styled.img`
    height: 40px;
    overflow-x : hidden;


    `

    const Buttons  = styled.div`
`