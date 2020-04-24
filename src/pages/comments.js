import React, { Component } from 'react';
import Layout from '../components/layout';
import {Alert, Spinner} from 'react-bootstrap';
import CommentsListing from '../components/commentslisting';

class Comments extends Component {
    
    state = {
        loading: true,
        error: false,
        postid : this.props.match.params.postid,
        comments: []
    };

    fetchDatafromAPI = () => {
        let apiURL = "https://jsonplaceholder.typicode.com/posts/" + this.state.postid + "/comments";
        console.log("API URL being called : "+apiURL)
        fetch(apiURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    comments: data,
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
                <CommentsListing comments={this.state.comments} />
            </Layout>
        )
    }
}

export default Comments;