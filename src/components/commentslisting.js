import React from 'react'
import { Card } from 'react-bootstrap';

const CommentsListing = ({ comments }) => {
    return (
        <div>
            <h1>All Comments</h1>
            <h6>Total Count = {comments.length}</h6>
            {comments.map((comment) => (
                <Card className="m-4" key={comment.id}>
                    <Card.Header>{comment.name}</Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
                        <Card.Text>
                            {comment.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}

        </div>
    )
};

export default CommentsListing