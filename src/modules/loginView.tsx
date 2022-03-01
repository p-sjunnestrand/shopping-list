import React from "react";
import Field from "./field";

interface Props {
    setUserId: (id: number|string) => void,
    toWelcome: () => void,
}
interface State {
    loginUsername: string,
    loginPassword: string,
}
class Login extends React.Component <Props, State>{

    state = {
        loginUsername: "",
        loginPassword: "",
    }

    //Put in module!
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const target = e.target;
        const name: string = e.target.name;
        const value: string = e.target.value;

        console.log(value);

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    callLogin = (e: React.MouseEvent<HTMLButtonElement>) => {

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
          console.log(data);
          
          
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
                <Field id="loginUsername" label="Användarnamn" type="text" required={false} onChange={this.onChange}/>
                <Field id="loginPassword" label="Lösenord" type="password" required={false} onChange={this.onChange}/>
                <button onClick={this.callLogin}>Loggga in</button>
                <button onClick={this.props.toWelcome}>Avbryt</button>
            </div>
        )
    }
}

export default Login;