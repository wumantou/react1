import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
// import { withRouter } from 'react-router-dom';
import Routes from './routes/Routes'

class App extends Component {
  
  render() {
    return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">Welcome to React</h1>
    //   </header>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.<br/>
    //     this is react hot load!<br/>
    //     ok! sucess!
    //   </p>
    // </div>

      <div className="app">
        <Routes />
      </div>
    )
  }
}

export default App
