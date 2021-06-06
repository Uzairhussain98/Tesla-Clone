import React , {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/Car/carSlice'
import {useSelector} from 'react-redux'

const Header = () => {

  const [status , setStatus ] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        { cars && cars.map((car , index) => (

          <a key={index} href="#">{car}</a>

        ) )}

      
      </Menu>

      <RightMenu>

      <a href="#">Shop</a>
      <a href="#">Tesla Account</a>

      <CustomMenu onClick={() => setStatus(true)}/>




      </RightMenu>

      
      <BurgerNav show={status}>
        <CloseWrap>
        <CustomCloseBtn  onClick={() => setStatus(false)}/>
        </CloseWrap>

      <li><a href="#">Existing Inventory</a></li>
      <li><a href="#">Used Inventory</a></li>
      <li><a href="#">Trade-In</a></li>
      <li><a href="#">CyberTruck</a></li>

      



      </BurgerNav>



    </Container>
  )
}

export default Header

const Container  = styled.div`
  min-height:60px;
  position :fixed ;
  display : flex ;
  align-items : center;
  justify-content : space-between;
  padding 0 20px;
  top : 0 ;
  left : 0 ;
  right : 0;
  z-index : 1;

`

const Menu  = styled.div`
display: flex;
align-items : center;
justify-content: center;
flex :1 ;
a{
  font-weight:600;
  text-transform: uppercase;
  padding : 0 10px;
  flex-wrap : no-wrap;
}

@media (max-width:768px){
  display:none;
}

`

const RightMenu  = styled.div`
display: flex;
align-items: center;

a{
  font-weight:600;
  text-transform: uppercase;
  margin-right:10px ;
}

`

const CustomMenu  = styled(MenuIcon)`
cursor : pointer;
`

const BurgerNav  = styled.div`
display: flex ;
position: fixed;
top :0;
bottom  :0;
right : 0;
background : white;
width :300px;
z-index: 16;
list-style: none;
padding: 20px;
flex-direction: column ;
text-align : start;
transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)' } ;
transition : transform 0.2s ease-in-out;

li{
  padding 15px 0 ;
  border-bottom : 1px solid rgba(0,0,0,.2);
  a{
    font-weight: 600;
  }

}

`

const CustomCloseBtn  = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrap  = styled.div`
display: flex;
justify-content: flex-end;

`


