import React, { Component } from 'react';
import "./BananaDetails.css";
import logo from ".././giphy.gif"



class BananaHeader extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
        <header> 
            <img src={logo}></img>
            <br/><br/>
            <h1 className="title">Banana Bank</h1>
        </header>
       )
    }
}

export default BananaHeader;
