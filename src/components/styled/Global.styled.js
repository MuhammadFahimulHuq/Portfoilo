import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


body{
    font-family: 'Roboto', sans-serif;
    background-color: ${({theme})=>theme.colors.body}
}
*{
    box-sizing:border-box;
    padding: 0px;
    margin: 0px;
}
`