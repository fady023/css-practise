import React, { Component } from "react";

class ClassComp extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
            /*  name: "fed",
             age: 99 */
        };
        console.log("constructor");
    }
    render() {
        console.log("render");
        return (
            <>
                <h3>counter : {this.state.counter}</h3>

                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>ADD</button>
                {/*   <h1>welcome {this.state.name }</h1>
                <h3>your age : {this.state.age}</h3> */}

            </>);
    }
    
    componentDidMount() {
        console.log("did mount")
    }
    shouldComponentUpdate() {
        console.log("should comp update"); return true;
    }

    componentDidUpdate() {
        console.log("comp did update");
    }
   
    componentWillUnmount(){
        console.log("unmount")
    }
}

export default ClassComp