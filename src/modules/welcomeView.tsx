import { Component } from "react";

interface Props {
    toLogin:() => void,
    toRegister:() => void,
}
class Welcome extends Component <Props>{
    render () {
        return (
            <section>
                <h1>Välkommen!</h1>
                <h2>Logga in eller skapa ett nytt konto.</h2>
                <button onClick={this.props.toLogin}>Logga in</button>
                <button onClick={this.props.toRegister}>Skapa konto</button>
            </section>
        )
    }
}

export default Welcome;