import React from 'react'
import { Table, ProgressBar } from 'react-bootstrap';
import { FaRegSmile, FaRegFrown, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

const ToDoListing = ({ todos }) => {
    return (
        <div>
            <h1>ToDo List</h1>
            <h6>Total Count = {todos.length}</h6>
            <Table responsive="lg" bordered hover>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed
                                ? <><FaRegSmile /> <FaRegThumbsUp color="green" /><ProgressBar variant="success" animated now={100} /></>                            
                                : <><FaRegFrown /> <FaRegThumbsDown color="red" /><ProgressBar variant="danger" animated now={10} /></>
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
};

export default ToDoListing