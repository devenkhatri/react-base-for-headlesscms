import React from 'react'
import { Table, Button } from 'react-bootstrap';

const PostListing = ({ posts }) => {
    return (
        <div>
            <h1>All Posts List</h1>
            <h6>Total Count = {posts.length}</h6>
            <Table responsive="lg" bordered hover>
                <thead className="bg-success text-light">
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td><Button href={`/comments/${post.id}`} variant="link">View Comments</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
};

export default PostListing