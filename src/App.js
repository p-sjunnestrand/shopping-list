import './App.css';
import { Component } from 'react';
import Field from './modules/field';

class App extends Component {

  state = {
    username: "",
    password: "",
  }

  onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    console.log(value);

    this.setState({
      [name]: value,
    });
  }
  callLogin = () => {
    // console.log('login!');
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    })
    .then((result) => result.json())
    .then(data => {
      console.log(data);
    })
  }
  render () {
    return (
      <div>
        <h1>Login</h1>
        <Field id="username" label="Username" onChange={this.onChange}/>
        <Field id="password" label="Password" onChange={this.onChange}/>
        <button onClick={this.callLogin}>Login</button>
      </div>
    )
  }
}
export default App;
