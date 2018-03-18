import React, { Component } from "react";

export default class Resultado extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesReactInPercent() {
    if (this.store.getState().react) {
      return (
        this.store.getState().react /
        (this.store.getState().react +
          this.store.getState().angular +
          this.store.getState().vuejs) *
        100
      );
    } else {
      return 0;
    }
  }
  votesAngularInPercent() {
    if (this.store.getState().angular) {
      return (
        this.store.getState().angular /
        (this.store.getState().angular +
          this.store.getState().react +
          this.store.getState().vuejs) *
        100
      );
    } else {
      return 0;
    }
  }
  votesVuejsInPercent() {
    if (this.store.getState().vuejs) {
      return (
        this.store.getState().vuejs /
        (this.store.getState().vuejs +
          this.store.getState().angular +
          this.store.getState().react) *
        100
      );
    } else {
      return 0;
    }
  }
  votesReactInPercentStyle() {
    return {
      width: this.votesReactInPercent() + "%"
    };
  }

  votesAngularInPercentStyle() {
    return {
      width: this.votesAngularInPercent() + "%"
    };
  }
  votesVuejsInPercentStyle() {
    return {
      width: this.votesVuejsInPercent() + "%"
    };
  }
  render() {
    return (
      <div>
        <span className="label label-danger">
          React: {this.votesReactInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-danger"
            style={this.votesReactInPercentStyle()}
          />
        </div>

        <span className="label label-info">
          Angular: {this.votesAngularInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-info"
            style={this.votesAngularInPercentStyle()}
          />
        </div>

        <span className="label label-success">
          Vuejs: {this.votesVuejsInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-success"
            style={this.votesVuejsInPercentStyle()}
          />
        </div>
      </div>
    );
  }
}
