import React from 'react'
import facebook from '../assets/image/facebook.png'
import instagram from '../assets/image/instagram.png'
import linkedin from '../assets/image/linkedin.png'
import gmail from '../assets/image/gmail.png'
import github from '../assets/image/github.png'

import { ContactNavigation, } from './styled/ContactNav.styled'

export const ContactNav = () => {
  return (
   <>
   <ContactNavigation>
        <a href='#'><img src={facebook} alt='facebook' /></a>
        <a href='#'><img src={instagram} alt='instgram' /></a>
        <a href='#'><img src={linkedin} alt='linkedin' /></a>
        <a href='#'><img src={gmail} alt='gmail' /></a>
       
   </ContactNavigation>
   </>
  )
}
