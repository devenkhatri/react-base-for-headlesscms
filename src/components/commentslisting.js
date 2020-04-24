import React from 'react'
import { Alert } from 'react-bootstrap';

const CommentsListing = ({ comments }) => {
    return (
        <div>
            <h1>All Comments</h1>
            <h6>Total Count = {comments.length}</h6>
            {comments.map((comment) => (
                <Alert variant="success">
                    <Alert.Heading>{comment.name}</Alert.Heading>
                    <p>{comment.email}</p>
                    <hr />
                    <p className="mb-0">{comment.body}</p>
                </Alert>
            ))}

        </div>
    )
};

export default CommentsListing