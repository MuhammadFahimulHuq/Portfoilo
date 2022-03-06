import React from 'react'
import { ContactNav } from './ContactNav'
import {StyledHeader} from './styled/Header.styled'
import { Nav } from './styled/Header.styled'
import { Container } from './styled/Header.styled'

export const Header = () => {
  return (
    <StyledHeader>

    
      <h2>Fahim.Portfolio</h2> 
      <Container>
           <Nav>
             <a href='/'>Hello</a>
             <a href='/mywork'>Projects</a>
             <a href='/contact'>Contact Me</a>
           </Nav>
           </Container>
           <ContactNav />
          

  
    </StyledHeader>
  )
}
