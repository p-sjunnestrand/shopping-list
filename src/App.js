import './App.css';
import { Component } from 'react';
import Login from './modules/loginView';
import Main from './modules/mainView';
import Header from './modules/header';

class App extends Component {

  state = {
    user: ""
  }

  componentDidMount() {
    fetch('http://localhost:4000/user', {
      method: "GET",
      credentials: "include",
    })
    .then(result => result.json())
    .then(data => {
      console.log(data)
      if(data.user){
        this.setUserId(data.user.user)
      }
    })
  }

  setUserId = (id) => {
    this.setState({user: id})
  }

  // getUser = () => {
  //   fetch('http://localhost:4000/user', {
  //     method: "GET",
  //     credentials: "include",
  //   })
  //   .then(result => result.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  render () {
    return (
      <div>
        <Header/>
        {this.state.user ? <Main /> : <Login setUserId={this.setUserId} />}
      </div> 
    )
  }
}
export default App;
