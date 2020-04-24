import React, { Component } from 'react';
import Layout from '../components/layout';
import Loader from 'react-loader-spinner'
import UserListing from '../components/userlisting';

class Home extends Component {
    state = {
        loading: true,
        users: []
    };

    fetchDatafromAPI = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((data) => {
                this.setState({ 
                    users: data,
                    loading: false 
                })
            })
            .catch(error => {
                console.log(error);
                this.wait();
            });
    };
    componentDidMount() {
        this.fetchDatafromAPI();
    }

    render() {
        return (
            <Layout title="Homepage">
                {this.state.loading && <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />}
                {/* ADD PAGE COMPONENTS BELOW */}
                <UserListing users={this.state.users} />
            </Layout>
        )
    }
}

export default Home;