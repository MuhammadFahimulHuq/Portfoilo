import styled from "styled-components";

export const ContactNavigation = styled.div`
display:flex;
width: 150px;
justify-content:space-between;
a{
    img {
        width: 30px;
        border-radius:50%;
        filter:grayscale(100%);
        -webkit-filter:grayscale(100%);
        transition:filter 600ms ease;
        -webkit-transition:-webkit-filter 600ms ease;
    }
    img:hover{
        filter:grayscale(0);
        -webkit-filter:grayscale(0);
        
    }
}

`