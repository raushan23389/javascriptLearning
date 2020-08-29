import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <Form/>
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
    {/* <Stylesheet primary = {true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Greet name = 'raushan' heroName="atman"/> */}
      {/* <Counter/> */}
    {/* <Greet name="Bruce" heroName="Batman">
      <p>thi is childrenprop</p>
      </Greet>
    <Greet name="kibana" heroName="fatman">
<button>Action</button>
      </Greet> */}
    {/* <Greet name="source" heroName="chatman"/>
    <Welcome name="Bruce" heroName="Batman"/>
    <Welcome name="kibana" heroName="fatman"/>
    <Welcome name="source" heroName="chatman"/> */}
    {/* <Hello/> */}
    {/* <Message>
      </Message> */}
    </div>
  );
}

export default App;
