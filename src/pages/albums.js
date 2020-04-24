import React, { Component } from 'react';
import Layout from '../components/layout';
import {Alert, Spinner} from 'react-bootstrap';
import AlbumListing from '../components/albumlisting';

class Albums extends Component {
    state = {
        loading: true,
        error: false,
        userid : this.props.match.params.userid,
        albums: []
    };

    fetchDatafromAPI = () => {
        let apiURL = this.state.userid ? ("https://jsonplaceholder.typicode.com/users/" + this.state.userid + "/albums") : "https://jsonplaceholder.typicode.com/albums";
        console.log("API URL being called : "+apiURL)
        fetch(apiURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({ 
                    albums: data,
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
                <AlbumListing albums={this.state.albums} />
            </Layout>
        )
    }
}

export default Albums;