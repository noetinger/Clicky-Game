import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Set state

  //Shuffle cards in browser when one is clicked
}

function App() {
  return (
    <Wrapper>
      <Navbar/>
      <Header>
        <Title>Clicky Game!</Title>
        <Subtitle>Try not to click the same image twice!</Subtitle>
      </Header>
      <CharacterCards>
        {/*   Images here   */}
      </CharacterCards>
      <Footer/>
    </Wrapper>
  );
}

export default App;
