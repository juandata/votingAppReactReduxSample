import React, { Component } from "react";
import { votarReact, votarAngular, votarVuejs } from "./actions";
import "./assets/sass/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteReact = () => {
    this.store.dispatch(votarReact());
  };
  handleVoteAngular = () => {
    this.store.dispatch(votarAngular());
  };
  handleVoteVuejs = () => {
    this.store.dispatch(votarVuejs());
  };
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: "center" }}>
          <h2>¿Cuál es tu framework (marco) favorito del 2018 ? </h2>
          <h4>Has click en los logos de abajo para votar</h4>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img
                  className="logos"
                  src={require("./assets/img/react.png")}
                  alt="Vota por React"
                  onClick={this.handleVoteReact}
                />
              </div>
              <div className="col-sm">
                <img
                  className="logos"
                  src={require("./assets/img/angular.svg")}
                  alt="Vota por Angular"
                  onClick={this.handleVoteAngular}
                />
              </div>
              <div className="col-sm">
                <img
                  className="logos"
                  src={require("./assets/img/vuejs.png")}
                  alt="Vota por Vuejs"
                  onClick={this.handleVoteVuejs}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
