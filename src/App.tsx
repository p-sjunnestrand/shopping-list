import './css/style.css';
import { Component } from 'react';
import Main from './modules/mainView';
import Header from './modules/header';
import Landing from './modules/landing';


interface State {
  user: number|string,
}

class App extends Component <State>{

  //If user is set in state, they are already logged in, redirecting them directly to the logged in view.
  state = {
    user: "",
  }

  componentDidMount() {
    //Calls the server asking if user is already logged in (through (de-)initialization in Passport)
    fetch('http://localhost:4000/user', {
      method: "GET",
      credentials: "include",
    })
    .then(result => result.json())
    .then(data => {
      console.log(data)
      //If user is initialized (i.e. already logged in) through Passport, userid is set in state.
      if(data.user){
        this.setUserId(data.user.user)
      }
    })
  }

  setUserId = (id: number|string) => {
    this.setState({user: id})
  }

  render () {
    return (
      <div>
        <Header user={this.state.user} setUserId={this.setUserId}/>
        {this.state.user ? <Main/> : <Landing setUserId={this.setUserId} />}
      </div> 
    )
  }
}
export default App;
