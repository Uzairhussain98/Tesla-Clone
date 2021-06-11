import React from 'react'
import styled from 'styled-components'
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import Fade from 'react-reveal/Fade';




function Section({title , description , backgroundImg , leftbtn , rightbtn ,down}) {
  const { keyframes, animationOptions } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 1000, // Delay 1s
      duration: 1200 ,// Speed up the animation
      iterations : Infinity,
      
    },
  });
  return (
    <Wrap bgImg = {backgroundImg}>
              <Fade bottom>

      <ItemText>
      <h1>{title}</h1>
      <p>{description}</p>

      </ItemText>
      </Fade>


<Buttons>
<Fade bottom>

      <ButtonGroup>
        <LeftButton>
          {leftbtn}
        </LeftButton>


      { rightbtn &&
      
      <RightButton>
      {rightbtn}
     </RightButton>

      
      }
     
      </ButtonGroup>
      </Fade>
    { down  ?
      <DownArrow ref={ref}  src='./images/down-arrow.svg'/> : null
    }
      </Buttons>

    </Wrap>
  )
}

export default Section


const Wrap = styled.div`

width:  100vw;
height: 100vh;
background-image : ${props => `url("/images/${props.bgImg}")`};
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