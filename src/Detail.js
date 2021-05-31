import React, { Component } from 'react'

export default class Detail extends Component {
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps Detail___________" + nextProps.name);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Detail___________ 1");
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate Detail___________ 2");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Detail___________ 3");
    }
    updateState = () => {
        this.setState({
            status: "Trang thai duoc update"
        })
    }
    render() {
        console.log("Ren der cua details");
        return (
            <div>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
