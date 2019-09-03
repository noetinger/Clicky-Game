import React from "react";
import "./style.css";

const Header = props => (
    <div id="header" className="bg-dark text-warning">
       <h1>Dragonball Z</h1>
        <label>Score: {props.clicks}</label>
        <label>High Score: {props.highScore}</label>
        <label>Wins: {props.wins}</label>
        <label>Losses: {props.losses}</label>
        
    
    </div>
);

export default Header;