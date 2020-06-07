import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
const PostDetails = (props) => {
    // const id = props.match.params.id
    const { post } = props;
    console.log(props)
    if (post) {
        return(
        <div>
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">post from -  {post.id}</span>
                            <p>{post.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {post.userFirstName} {post.userLastName}</div>
                            <div>20/4/2020</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
)
    } else {
        return (
            <div className="container center">
                <p>loading post......</p>
            </div>

        );
    }



};
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id
    const posts = state.firestore.data.posts
    const post = posts ? posts[id] : null
    return {
        post: post
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails);