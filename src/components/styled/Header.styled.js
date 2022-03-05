import styled from 'styled-components'

export const  StyledHeader = styled.header`
background-color:${({theme})=>theme.colors.header};
width: 100vw;
padding:50px;
h1{
color:${({theme})=>theme.fontColors.one};
}
`
export const Nav = styled.nav`
font-size:clamp(15px,4vw,25px);
width:20%;
display:flex;
justify-content:space-between;
a{
    text-decoration: none;
    color:${({theme})=>theme.fontColors.one};
    transition: border-bottom 1s;
}
a:hover{
    border-bottom:1px solid ${({theme})=>theme.hoverColors.yellow};

}
`
export const Container = styled.div`
display:flex;
justify-content:space-between;
`