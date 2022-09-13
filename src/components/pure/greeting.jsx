import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 30,
    };
  }

  render() {
    return (
      <div>
        <h1>Hola {this.props.name}.</h1>
        <p>Tienes {this.state.age} años</p>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
