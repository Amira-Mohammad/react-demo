import React from 'react';

const PostSummary = ({post}) => {
    return (
        <div>
            <div className="card bg-light">
                <div className="card-content text-secondary">
                    <span className="card-title">post about {post.title}</span>
                    <p>{post.content}</p>
                </div>
                <div className="card-action d-flex justify-content-between">
                    <p href="#">Like</p>
                    <p href="#">comment</p>
                    <p href="#">share</p>
                </div>
            </div>
        </div>
    );
};

export default PostSummary;














