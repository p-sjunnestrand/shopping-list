import React from "react";
import Field from "./field";

interface Props {
    setUserId: (id: string|number) => void,
    toWelcome: () => void,
}

interface State {
    regUsername: string|undefined,
    regPassword: string|undefined,
}
class Register extends React.Component <Props, State> {

    state = {
        regUsername: undefined,
        regPassword: undefined,
    }
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const target = e.target;
        const name = e.target.name;
        const value = e.target.value;

        // console.log(value);

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    register = () => {
        fetch("http://localhost:4000/register", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: this.state.regUsername, password: this.state.regPassword})
        })
        //This needs to be moved to landing.js and passed down as prop here and to login!
        .then(() => {
            fetch("http://localhost:4000/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({username: this.state.regUsername, password: this.state.regPassword})
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
        })
    }
    render () {
        return (
            <section>
                <h1>Skapa ett nytt konto:</h1>
                <p>Jag är ingen säkerhetsexpert, så använd inte typ ditt banklösenord...</p>
                <Field id="regUsername" label="Användarnamn" type="text" required={true} onChange={this.onChange}/>
                <Field id="regPassword" label="Lösenord" type="text" required={true} onChange={this.onChange}/>
                <button onClick={this.register}>Skapa konto</button>
                <button onClick={this.props.toWelcome}>Avbryt</button>
            </section>
        )
    }
}

export default Register;