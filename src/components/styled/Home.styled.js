import styled from "styled-components";

export const HomeSection = styled.section`
height:100%;
width:100%;
display:block;
h1{
    font-size: clamp(50px,10vw,120px);
    color: ${({theme})=>theme.colors.header};

}

span{
    text-decoration: underline;
    font-size: 25px
}
p{
    font-size: 20px;
    line-height: 35px;
    margin-top: 50px;
}

`
export const Subtitle = styled.h2`
font-size: clamp(50px,10vw,120px);
color: ${({theme})=>theme.colors.header};
padding-left:50px;
`

export const Introuction = styled.div`

`
export const ProfilePicture = styled.div`

img{
    max-width: 95%;
    max-height: 95%;
    margin: auto;
   
  
}



`
export const Container = styled.div`
display:flex;
justify-content:space-evenly;
padding:50px;

`
export const MoreAboutMe = styled.div`
padding: 15px;
display:flex;
justify-cotent:center;
flex-direction: column;
p{
    margin: 20px 0px;
}
`

export const Button = styled.button`
    align-items: center;
    appearance: none;
    background-color: #FCFCFD;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395A;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
  
  
  &:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }
  
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  
  &:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
  }
`
