import { Component} from "react";
import Field from "./field";

class Login extends Component {

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        console.log(value);

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
          body: JSON.stringify({username: this.state.username, password: this.state.password})
        })
        // .then((result) => result.json())
        // .then(data => {
        //   console.log(data);
        //   this.props.setUserId(data)
        // })
        // .then(response => {
        //   if(!response.ok) {
        //     throw new Error (response)
        //   } else {
        //     this.props.setUserId()
        //   }
        // })
        // .catch(error)
        .then( async (response) => {

          // get json response here
          let data = await response.json();
          
          if(response.status === 200){
           // Process data here
           console.log("ok!");
           console.log(response.status);
           console.log(data);
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
                <h1>Logga in:</h1>
                <Field id="username" label="Username" onChange={this.onChange}/>
                <Field id="password" label="Password" onChange={this.onChange}/>
                <button onClick={this.callLogin}>Login</button>
            </div>
        )
    }
}

export default Login;