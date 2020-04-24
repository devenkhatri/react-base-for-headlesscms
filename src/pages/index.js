import React, { Component } from 'react';
import Layout from '../components/layout';
import {Alert, Spinner} from 'react-bootstrap';
import UserListing from '../components/userlisting';

class Home extends Component {
    state = {
        loading: true,
        error: false,
        users: []
    };

    fetchDatafromAPI = () => {
        let apiURL = "https://jsonplaceholder.typicode.com/users";
        console.log("API URL being called : "+apiURL)
        fetch(apiURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({ 
                    users: data,
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
                <UserListing users={this.state.users} />
            </Layout>
        )
    }
}

export default Home;