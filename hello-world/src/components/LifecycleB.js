import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'viswas'
         }
         console.log('LifeCycleB constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log('lifecycleB getDerivedStateFromProps')
         return null

     }
     
     componentDidMount(){
         console.log('lifecycleB componentDidMount')
     }

     shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }

    render() {
        console.log('lifecycleB render')
        return (
            <div>
                lifecycleB
            </div>
        )
    }
}

export default LifecycleB
