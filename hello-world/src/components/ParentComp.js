import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'raushan'
         }
     }

     componentDidMount(){
         setInterval(()=>{
             this.setState({
                 name:'raushan'
             })
         },2000)
     }
     
    render() {
        console.log('parent component render')
        return (
            <div>
               parent Component 
               <MemoComp name = {this.state.name}/>
               {/* <RegComp name = {this.state.name}></RegComp>
               <PureComp name = {this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
