import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;500&display=swap');
html body{
    font-family: 'Raleway', sans-serif;
 
    over-flow:hidden;
    background-color: ${({theme})=>theme.colors.body}
}
*{
    box-sizing:border-box;
    margin: 0px;
    padding:0px;
}
`