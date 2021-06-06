import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'


function Home() {
  return (
    <Container>
      <Header/>

    <Section
      title = "Model S"
      description = "Order Now For Touchless Delivery"
      backgroundImg = "model-s.jpg"
      leftbtn = "Custom Order"
      rightbtn = "Existing Inventory"
    />

<Section
      title = "Model Y"
      description = "Order Now For Touchless Delivery"
      backgroundImg = "model-y.jpg"
      leftbtn = "Custom Order"
      rightbtn = "Existing Inventory"
    />
  


  <Section
      title = "Model 3"
      description = "Order Now For Touchless Delivery"
      backgroundImg = "model-3.jpg"
      leftbtn = "Custom Order"
      rightbtn = "Existing Inventory"
    />
  
  <Section
      title = "Model X"
      description = "Order Now For Touchless Delivery"
      backgroundImg = "model-x.jpg"
      leftbtn = "Custom Order"
      rightbtn = "Existing Inventory"
    />

<Section
      title = "Lowest Cost Solar Panels in America"
      description = "Money-back guarantee"
      backgroundImg = "solar-panel.jpg"
      leftbtn = "Order Now"
      rightbtn = "Learn More"
    />

<Section
      title = "Solar for New Roofs"
      description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      backgroundImg = "solar-roof.jpg"
      leftbtn = "Order Now"
      rightbtn = "Learn More"
    />


<Section
      title = "Accessories"
      description = ""
      backgroundImg = "accessories.jpg"
      leftbtn = "Order Now"
    />

  
  

    
    </Container>
  )
}

export default Home

const Container = styled.div`
   height: 100vh;
`
