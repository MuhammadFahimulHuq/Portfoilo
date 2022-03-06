import React from 'react'
import { Header } from '../components/Header'
import { Subtitle,HomeSection,Introuction,ProfilePicture,Container,MoreAboutMe,Button } from '../components/styled/Home.styled'
import profileImage from '../assets/image/profilepicture.jpg'
export const Home = () => {
  return (
    <HomeSection>
        <Header />
        <Container>
        <Introuction>
        <h1>Hello,<br /><Subtitle>I am Fahim.</Subtitle></h1>
        <p> I am <span>Full Stack Developer / UX UI Designer</span> from Bangladesh.</p>
        </Introuction>
        <ProfilePicture>
            <img src={profileImage} alt="profile"/>
        </ProfilePicture>
        <MoreAboutMe>
            <p>Hire me.</p>
            <Button>
             Download My CV
           </Button>
        </MoreAboutMe>
        </Container>
    </HomeSection>
  )
}
