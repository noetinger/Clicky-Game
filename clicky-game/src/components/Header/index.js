import React from "react";
import "./style.css";

const Header = props => (
    <div id="header" className="bg-dark text-warning">
       <h1>Dragonball Z</h1>
       <h4>Clicky Game - Click an image, but don't click the same image twice!</h4>
       <div className="container">
            <div className="row align-items-center">
                <div className="col-md-3"></div>
                <label className="col-md-3">Score: {props.clicks}</label>
                <label className="col-md-3">High Score: {props.highScore}</label>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
);

export default Header;