import React, { Component } from 'react';
import NavBar from './navbar';
import Footer from './footer';

class Bio extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <br></br><br></br><br></br>
                <h1 style={{ textAlign: "center" }}>Bio</h1>
                <Footer />
            </div>
        );
    }
}

export default Bio;
