import React from "react";
import "./style.css";

const Header = props => (
    <div id="header" className="bg-dark text-warning">
       <h1>Dragonball Z</h1>
       <h2>Clicky Game</h2>
       <div className="container">
            <div className="row align-items-center">
                <label className="col-md-3">Score: {props.clicks}</label>
                <label className="col-md-3">High Score: {props.highScore}</label>
                <label className="col-md-3">Wins: {props.wins}</label>
                <label className="col-md-3">Losses: {props.losses}</label>
            </div>
        </div>
    </div>
);

export default Header;