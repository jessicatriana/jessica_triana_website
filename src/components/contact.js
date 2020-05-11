import React, { Component } from 'react';
import NavBar from './navbar';
import Footer from './footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <br></br><br></br><br></br>
                <h1 style={{ textAlign: "center" }}>Contact Info</h1>
                <Footer />
            </div>
        );
    }
}

export default Contact;
