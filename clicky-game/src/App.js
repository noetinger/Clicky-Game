import React, { Component } from "react";
import './App.css';
import DBZ from "./dbz.json"
// import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Title from "./components/Title";
// import Subtitle from "./components/Subtitle";
import CharacterCards from "./components/CharacterCards";
// import Footer from "./components/Footer";

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {

    let randomIdx = Math.floor(Math.random() * (i + 1))
    let randomValue = array[randomIdx]

    array[randomIdx] = array[i]
    array[i] = randomValue

  }
}

class App extends Component {
  //Set state
  state = {
    clicks: [],
    clickCount: 0,
    wins: 0,
    losses: 0,
    highScore: 0,
    DBZ
  };

  handleDivClick = (id) => {

    let clickArr = this.state.clicks
    let { highScore, clickCount } = this.state

    console.log(clickArr)

    if (clickArr.indexOf(id) > -1) {
     
      this.setState({ clicks: [], clickCount: 0, losses: this.state.losses + 1 })
      
    } else {

      clickCount++

      clickArr.push(id)
      this.setState({ clicks: clickArr, clickCount: clickCount })



      if (clickCount > highScore) {
        this.setState({ highScore: clickCount })
      }

      if(clickCount % DBZ.length === 0){
        this.setState({clicks:[], wins: this.state.wins + 1 })
      }

    }

    this.setState({ DBZ: shuffleArray(DBZ) })

  };
  render() {
    //shuffleArray(Minions)

    return (

      <div>

        <Header clicks={this.state.clickCount} highScore={this.state.highScore} wins={this.state.wins} losses={this.state.losses} />

        {this.state.DBZ.map(DBZ => <CharacterCards key={DBZ.id} name={DBZ.name} img={process.env.PUBLIC_URL + DBZ.image} handleDivClick={this.handleDivClick} id={DBZ.id} />)}


      </div>


    );
  }
}

export default App;
