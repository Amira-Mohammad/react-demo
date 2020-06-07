import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../store/actions/PostActions';



class CreatePost extends Component {
    state ={
        title:"",
        content:""
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.createPost(this.state);
        this.props.history.push('/');
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
            <h5 className="grey-text text-darken-3">create new project</h5>
            <div className="input-field">
                <label htmlFor="title" className="text-dark" >title</label>
                <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="content" className="text-dark">content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
               <button className="btn pink lighten-1" onClick={this.handleSubmit}>create</button>
            </div>
            </form> 
            </div>
        );
    }
}
 const mapDispatchToProps = (dispatch) =>{
     return{
         createPost :(post) => dispatch(createPost(post))
     }
 }
export default connect(null , mapDispatchToProps)(CreatePost);