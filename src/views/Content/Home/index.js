import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { push } from "connected-react-router";

import { setDemoData } from "../../../redux/actions/demo";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.setDemoData()}>
          change the value
        </button>
        <br />
        <br />
        <br />
        <button onClick={() => this.props.dispatch(push("/about"))}>
          arrive about page
        </button>
        {this.props.demoData.map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  demoData: state.demo.demoData
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setDemoData
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
