import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import {
  Navbar,
  Login,
  Signup,
  Home,
  Page404,
  Setting,
  PrivateRoute,
} from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          name: user.name,
          _id: user._id,
        })
      );
    }
  }
  render() {
    const { posts, auth } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/setting"
              component={Setting}
              isLoggedIn={auth.isLoggedIn}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts.posts,
  };
}
export default connect(mapStateToProps)(App);
