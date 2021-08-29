import { Component} from "react";
import Field from "./field";

class Login extends Component {

    //Put in module!
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        // console.log(value);

        this.setState({
        [name]: value,
        });
    }

    callLogin = (e) => {

        fetch("http://localhost:4000/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({username: this.state.loginUsername, password: this.state.loginPassword})
        })
        .then( async (response) => {

          // get json response here
          let data = await response.json();
          
          if(response.status === 200){
           // Process data here
           console.log("ok!");
           console.log(response.status);
           console.log(data);
           this.props.setUserId(data)
          }
          if(response.status !== 200){
           // Rest of status codes (400,500,303), can be handled here appropriately
           console.log(response.status);
          }
  
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render () {
        return (
            <div>
                <h1>Välkommen!</h1>
                <Field id="loginUsername" label="Användarnamn" onChange={this.onChange}/>
                <Field id="loginPassword" label="Lösenord" type={"password"} onChange={this.onChange}/>
                <button onClick={this.callLogin}>Loggga in</button>
                <button onClick={this.props.toWelcome}>Avbryt</button>
            </div>
        )
    }
}

export default Login;