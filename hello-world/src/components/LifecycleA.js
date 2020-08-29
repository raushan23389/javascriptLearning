import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'viswas'
         }
         console.log('LifeCycleA constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log('lifecycleA getDerivedStateFromProps')
         return null

     }
     
     componentDidMount(){
         console.log('lifecyclea componentDidMount')
     }

     shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState = ()=>{
        this.setState({
            name: 'codeevolution'
        })
    }
    render() {
        console.log('lifecycleA render')
        return (
            <div>
            <div>lifecycleA</div>
            <button onClick={this.changeState}>change state</button>
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
