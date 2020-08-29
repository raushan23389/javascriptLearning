import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message : "hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : "goodbye"
    //     })
    // }

    clickHandler = () => this.setState({
        message : "goodbye"
    })
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* binding in render */}
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
                {/* //arrow function  */}
                {/* <button onClick = {()=>this.clickHandler()}>Click</button> */}
                {/* binding in class constructor and binding arrow function{best approach} */}
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
