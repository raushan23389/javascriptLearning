import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: false
         }
     }
     
    render() {


       return ( 
           this.state.isLoggedIn && <div>Welcome raushan</div>
           )
        // return(
        //     this.state.isLoggedIn ? <div>welcome raushan</div> : <div> Welcome guest</div>
        // )
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div> Welcome Raushan</div>
        // }
        // else{
        //     message = <div> Welcome guest</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome raushan</div>
        //     )
        // }
        // else{
        //     return(
        //     <div>Welcome guest</div>
        //     )
        // }
        // return (
        //     // <div>
        //     // <div> welcome raushan</div>
            
        //     // </div>
        // )
    }
}

export default UserGreeting
