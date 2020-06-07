import React, { Component } from 'react';
import PostsList from '../posts/PostsList';
import Notifications from './Notifications';
import {connect} from 'react-redux';
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class TimeLine extends Component {
    render() {
        const {Posts} = this.props 
        
        return (
            <div className="Home-Background">
                <div className="text-center pink-text font-weight-bold">TimeLine</div>
                <div className="d-flex justify-content-around">
                <div className="d-flex flex-column">
                <div className=" pink-text font-weight-bold">Click on create post button to create your own post</div>
                    <PostsList posts={Posts}/>
                    </div>
                    <Notifications/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    
    return {
      Posts: state.firestore.ordered.posts
    }
  }
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection :'posts'}
    ])
) (TimeLine) ;