import React, { Component } from 'react';
import Layout from '../components/layout';
import {Alert, Spinner} from 'react-bootstrap';
import PostListing from '../components/postlisting';

class Posts extends Component {
    state = {
        loading: true,
        error: false,
        userid : this.props.match.params.userid,
        posts: []
    };

    fetchDatafromAPI = () => {
        let apiURL = this.state.userid ? ("https://jsonplaceholder.typicode.com/users/" + this.state.userid + "/posts") : "https://jsonplaceholder.typicode.com/posts";
        console.log("API URL being called : "+apiURL)
        fetch(apiURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({ 
                    posts: data,
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
                <PostListing posts={this.state.posts} />
            </Layout>
        )
    }
}

export default Posts;