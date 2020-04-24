import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

const PhotosListing = ({ photos }) => {
    return (
        <div>
            <h1>All Photos</h1>
            <h6>Total Count = {photos.length}</h6>
            <Row className="p-4 flex-wrap">
                {photos.map((photo) => (
                    <Col className="col-lg-3 mb-4" key={photo.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={photo.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{photo.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
};

export default PhotosListing