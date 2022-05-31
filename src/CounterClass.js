import React from "react";

class CounterClass extends React.Component {
  // if all you have is state, you can by pass define the constructor
  // and simply define state like this
  //   state = {
  //     count: 0,
  //     totalCount: 0,
  //   }
  constructor(props) {
    // calls React.Component constructor gives it props
    // for it todo whatever it does with it
    super(props);

    // create a state object
    this.state = {
      count: 0,
      totalCount: 0,
    };
    // bind this(the instance of Counter Component) to noArrow
    this.noArrow = this.noArrow.bind(this);
  }

  // this runs on mount and only mount
  componentDidMount = () => {
    console.log("mounted");
  };

  // this runs whenever state changes
  componentDidUpdate = (prevProps, prevState) => {
    console.log("state changes");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevState.count == 10) {
      this.setState({
        count: 0,
      });
    }
  };

  componentWillUnmount = () => {
    console.log("unmounting");
  };

  add = () => {
    // console.log('clicked')
    //console.log('this:', this) // this is the instance of Counter Component
    // this seems responiable but never do this. we don't want to mutate
    // state alway use the setState
    // this.state.count++ BAD!!!!

    // setState function: updates state and rerenders component
    this.setState({
      count: this.state.count + 1,
      totalCount: this.state.totalCount + 1,
    });
  };

  noArrow() {
    console.log("clicked");
    console.log("this:", this); // undefined unless bound in constructor
  }

  resetTotalCount = () => {
    this.setState({
      totalCount: 0,
    });
  };

  // we have to define a render function, this returns our JSX
  render() {
    return (
      <div>
        <h1>Counter Class Component</h1>
        <h1>{this.props.title}</h1>
        <p>count: {this.state.count}</p>
        <p>totalCount: {this.state.totalCount}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.resetTotalCount}>reset total</button>
        <button onClick={this.noArrow}>click no arrow function</button>
      </div>
    );
  }
}

export default CounterClass;
