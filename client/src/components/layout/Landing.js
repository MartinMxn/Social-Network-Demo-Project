import React, { Component } from "react";
import {Link} from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Connector</h1>
                <p className="lead">
                  {" "}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <div className="LandHr"></div>
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Say Hello!
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Come Back!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.protoTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing);
