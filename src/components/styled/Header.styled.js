import styled from 'styled-components'

export const  StyledHeader = styled.header`

width: 100vw;
display:flex;
padding: 30px 60px;
justify-content:space-between;
h2{
color:${({theme})=>theme.fontColors.two};
}
`
export const Nav = styled.nav`
font-size:clamp(10px,4vw,18px);
width: 50%;
display:flex;
justify-content:space-between;
a{
    text-decoration: none;
    color:${({theme})=>theme.fontColors.two};
    transition: border-bottom 1s;
    padding-top:6px
}
a:hover{
    border-bottom:1px solid ${({theme})=>theme.hoverColors.yellow};

}
`
export const Container = styled.div`
display:flex;
justify-content:center;
width: 50%;

`

/* CSS */
