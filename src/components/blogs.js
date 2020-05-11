import React, { Component } from 'react';
import NavBar from './navbar';
import Footer from './footer';

class Blogs extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <br></br><br></br><br></br>
                <h1 style={{ textAlign: "center" }}>Technical Blogs</h1>
                <Footer />
            </div>
        );
    }
}

export default Blogs;
