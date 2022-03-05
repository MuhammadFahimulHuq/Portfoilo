import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styled/Global.styled";

function App() {

const theme ={
  colors:{
    header:'#21325E',
    body: '#F0F0F0',
    footer: '#3E497A'
  },
  fontColors:{
    one:'#fff',
  },
  hoverColors:{
    yellow: '#F1D00A'
  }
}

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
<Header />

   </ThemeProvider> 
  );
}

export default App;
