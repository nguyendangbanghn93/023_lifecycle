import React, { Component } from 'react'
import Detail from './Detail';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Trang thai",
      status2 :"Bang"
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps da chay")
  }
  
  componentWillMount() {
    console.log("componentWillMount da chay")
  }
  componentDidMount() {
    console.log("componentDidMount da chay")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate da chay 1");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate da chay 2");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate da chay 3");
  }
  updateState = () => {
    this.setState({
      status: "Trang thai duoc update",
      status2: "Update status 2"
    })
  }
  
  
  render() {
    console.log("render chay");
    console.log(this.state);
    return (
      <div className="App">
        <Detail name={ this.state.status2}></Detail>
        <button onClick={this.updateState}>cap nhat</button>
      </div>
    )
  }
}

