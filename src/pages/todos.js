import React, { Component } from 'react';
import Layout from '../components/layout';
import {Alert, Spinner} from 'react-bootstrap';
import ToDoListing from '../components/todolisting';

class Todos extends Component {
    
    state = {
        loading: true,
        error: false,
        userid : this.props.match.params.userid,
        todos: []
    };

    fetchDatafromAPI = () => {
        let apiURL = this.state.userid ? ("https://jsonplaceholder.typicode.com/users/" + this.state.userid + "/todos") : "https://jsonplaceholder.typicode.com/todos";
        console.log("API URL being called : "+apiURL)
        fetch(apiURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    todos: data,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({ 
                    error: true,
                    loading: false 
                })
                console.log(error);
            });
    };
    componentDidMount() {
        this.fetchDatafromAPI();
    }

    render() {
        return (
            <Layout>
                {this.state.error && <Alert variant="warning"><Alert.Heading>Error fetching data.</Alert.Heading>See browser console for detailed error message<hr/>Refresh the page to try again !!!</Alert>}
                {this.state.loading && <Spinner animation="grow" variant="success" />}
                {/* ADD PAGE COMPONENTS BELOW */}
                <ToDoListing todos={this.state.todos} />
            </Layout>
        )
    }
}

export default Todos;