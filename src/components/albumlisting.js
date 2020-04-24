import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

const AlbumListing = ({ albums }) => {
    return (
        <div>
            <h1>All Album List</h1>
            <h6>Total Count = {albums.length}</h6>
            <Row className="p-4 flex-wrap">
                {albums.map((album) => (
                    <Col className="col-lg-3 mb-4" key={album.id}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{album.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href={`/photos/${album.id}`}>View Photos</Card.Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
};

export default AlbumListing