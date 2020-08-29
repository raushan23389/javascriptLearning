import React, { Component } from 'react'
import Focus from './Focus'

 class FocusInput extends Component {
    constructor(props) {
        super(props)
this.comRef = React.createRef()
    }
    
    ClickHandler = ()=>{
        this.comRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Focus ref= {this.comRef}/>
                <button onClick = {this.ClickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
