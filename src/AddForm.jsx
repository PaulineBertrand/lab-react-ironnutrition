import React, { Component } from "react";

export default class AddForm extends Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleForm(this.state);
  };

  render() {
    if (this.props.display) {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h2>What did you eat this time??</h2>
        <hr />
        <div className="field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <div className="control">
            <input
              id="name"
              className="input"
              type="text"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <label htmlFor="calories" className="label">
          calories
        </label>
        <input
          id="calories"
          className="input"
          type="number"
          value={this.state.calories}
          onChange={this.handleChange}
        />
        <label htmlFor="image" className="label">
          image
        </label>
        <input
          id="image"
          className="input"
          type="text"
          onChange={this.handleChange}
        />
        <button className="button">ok</button>
      </form>
    );
    } else {return null}
  } 
}
