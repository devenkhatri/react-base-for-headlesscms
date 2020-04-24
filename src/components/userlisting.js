import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

const UserListing = ({ users }) => {
    return (
        <div>
            <center><h1>All Users List</h1></center>
            <Row className="p-4 flex-wrap">
                {users.map((user) => (
                    <Col className="col-lg-3 mb-4" key={user.id}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{user.name} (@{user.username})</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                                <Card.Text>
                                    {user.company.catchPhrase}
                                    {user.company.bs}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href={`/albums/${user.id}`}>Albums</Card.Link>
                                <Card.Link href={`/posts/${user.id}`}>Posts</Card.Link>
                                <Card.Link href={`/todos/${user.id}`}>Todos</Card.Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
};

export default UserListing