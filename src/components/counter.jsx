import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate metoda se poziva nakon update komponente - nakon promene vrednosti
  componentDidUpdate(prevProps, prevSate) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevSate);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  // componentWillUnmount metod se poziva nakon sto je komponenta izbrisana iz DOM-a
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    //console.log("props", this.props);

    let classes = this.getBadgeClasses();

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //solution 1
    //return this.state.count === 0 ? "Zero" : this.state.count; //solution 1

    //solution 2
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  /* handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }; */
}

export default Counter;
