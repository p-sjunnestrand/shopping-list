import { Component } from "react";
import Welcome from "./welcomeView";
import Login from "./loginView";
import Register from "./registerView";

interface State {
    view: string,
}
interface Props {
    setUserId: (id: number|string) => void,
}

class Landing extends Component <Props, State> {

    state = {
        view: "welcome"
    }

    renderSwitch = (view: string) => {
        switch(view) {
            case "welcome":
                return <Welcome toLogin={this.toLogin} toRegister={this.toRegister}/>;
            case "login":
                return <Login toWelcome={this.toWelcome} setUserId={this.props.setUserId}/>;
            case "register":
                return <Register toWelcome={this.toWelcome} setUserId={this.props.setUserId}/>;
            default:
                return <h3>Oj, något gick fel! Pröva att ladda om sidan.</h3>
            
        }
    }
    //Sets state to conditionally render components
    toLogin = () => {this.setState({view: "login"})};
    toRegister = () => {this.setState({view: "register"})};
    toWelcome = () => {this.setState({view: "welcome"})};

    render () {
        return (
            <section>
                {this.renderSwitch(this.state.view)}
            </section>
        )
    }
}

export default Landing;