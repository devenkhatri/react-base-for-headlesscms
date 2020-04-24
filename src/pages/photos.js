import React, { Component } from 'react';
import Layout from '../components/layout';
import {Alert, Spinner} from 'react-bootstrap';
import ToDoListing from '../components/todolisting';

class Photos extends Component {
    
    state = {
        loading: true,
        error: false,
        albumid : this.props.match.params.albumid,
        photos: []
    };

    fetchDatafromAPI = () => {
        let apiURL = "https://jsonplaceholder.typicode.com/albums/" + this.state.albumid + "/photos";
        console.log("API URL being called : "+apiURL)
        fetch(apiURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    photos: data,
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
                <ToDoListing todos={this.state.photos} />
            </Layout>
        )
    }
}

export default Photos;