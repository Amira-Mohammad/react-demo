import React from 'react';
import PostSummary from './PostSummary';
import {Link} from 'react-router-dom'

const PostsList = ({posts}) => {
    return (
        <div className="Home-Background">
            {posts && posts.map(post =>{
                    return(
                        <Link to={'/post/' + post.id} key={post.id} className="text-decoration-none">
                        <PostSummary post={post} key={post.id}/>
                        
                    </Link>
                    )
                })}
        </div>
    );
};

export default PostsList;







