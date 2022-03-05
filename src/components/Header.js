import React from 'react'
import {StyledHeader} from './styled/Header.styled'
import { Nav } from './styled/Header.styled'
import { Container } from './styled/Header.styled'
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
      <h1>Fahim.Portfolio</h1> 
           <Nav>
             <a href='/'>Home</a>
             <a href='/mywork'>Project</a>
             <a href='/contact'>Contact</a>
           </Nav>
      </Container>
    </StyledHeader>
  )
}
