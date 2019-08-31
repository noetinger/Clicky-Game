import React from "react";
import "./style.css";

const Header = props => (
    <div id="header" class="bg-primary text-light">
       <h3>Dragonball Z</h3>
        <label>Score: {props.clicks}</label>
        <label>High Score: {props.highScore}</label>
        <label>Wins: {props.wins}</label>
        <label>Losses: {props.losses}</label>
        
    
    </div>
);

export default Header;