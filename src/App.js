import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styled/Global.styled";
import { Home } from "./Sections/Home";

function App() {

const theme ={
  colors:{
    header:'#21325E',
    body: '#F0F0F0',
    footer: '#3E497A'
  },
  fontColors:{
    one:'#fff',
    two: '#141E27',
  },
  hoverColors:{
    yellow: '#F1D00A'
  },
 section:{
  height:'100vh'
 } 
}

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
<Home />

   </ThemeProvider> 
  );
}

export default App;
