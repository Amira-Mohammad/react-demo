import React, { Component } from 'react';

class SignInForm extends Component {
    state ={
        email:"",
        password:""
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
            }
    render() {
        return (
            <div className="container Home-Background">
            <form className="border p-4 m-4 rounded border-danger">
            <h5 className="grey-text text-darken-3">sign In</h5>
            <div className="input-field">
                <label htmlFor="email" className="text-dark" >email</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password" className="text-dark">password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
               <button className="btn pink lighten-1" onClick={this.handleSubmit}>logIn</button>
            </div>
            </form> 
            </div>
        );
    }
}

export default SignInForm;