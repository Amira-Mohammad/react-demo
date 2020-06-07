import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (

            <nav>
                <ul className="left"><Link to="/" className="brand-logo ml-5 left">SociLizers</Link></ul>
                <ul className="right">
                    <li><Link to="sign_up">signUp</Link></li>
                    <li><Link to="sign_in">signIn</Link></li>
                    <li><Link to="create_post">create post</Link></li>
                    <li><Link to="/">logOut</Link></li>
                    <li className="pink " ><Link to="">NN</Link></li>
                </ul>
            </nav>

        );
    }
}

export default NavBar;